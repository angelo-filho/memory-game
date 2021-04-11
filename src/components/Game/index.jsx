import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Board from '../Board';

import { api } from '../../services/api';
import GameContext from './GameContext';
import WinGame from '../WinGame';

function Game() {
  const [cards, setCards] = useState(shuffleCards(api));
  const [flippedCards, setFlippedCards] = useState([]);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isOnCoolDown, setIsOnCoolDown] = useState(false);
  const [points, setPoints] = useState(0);
  const [isWinner, setIsWinner] = useState(false);

  const timeBeginning = 2000;
  const timeCanFlip = 1000;

  function shuffleCards(oldCards) {
    const newCards = Array(oldCards.length - 1);

    for (let card of oldCards) {
      while (true) {
        let randomIndex = Math.floor(Math.random() * oldCards.length);

        if (!newCards[randomIndex]) {
          newCards[randomIndex] = card;

          break;
        }
      }
    }

    return newCards;
  }

  function makeIsFlipped(index) {
    const tradeCards = [...cards];

    tradeCards[index].isFlipped = true;

    setFlippedCards([...flippedCards, index]);
    setCards(tradeCards);
  }

  function unmakeIsFlipped() {
    const tradeCards = [...cards];

    for (let flippedCard of flippedCards) {
      tradeCards[flippedCard].isFlipped = false;
    }

    setCards(tradeCards);
  }

  function makeAllIsNotFlipped() {
    const tradeCards = cards.map((card) => ({ ...card, isFlipped: false }));

    setCards(tradeCards);
    setIsBeginning(false);
  }

  function checkIsRight() {
    return cards[flippedCards[0]].name === cards[flippedCards[1]].name;
  }

  function makeIsRight() {
    const [one, two] = flippedCards;
    const tradeCards = [...cards];

    tradeCards[one].isRight = true;
    tradeCards[two].isRight = true;

    setCards(tradeCards);
    addPoints(10);
    verifyCanWin();
  }

  function unmakeAllIsRight() {
    const tradeCards = cards.map((card) => ({ ...card, isRight: false }));

    setCards(tradeCards);
  }

  function addPoints(amount) {
    setPoints(points + amount);
  }

  function verifyCanWin() {
    if (cards.every((card) => card.isRight)) {
      setIsWinner(true);
      unmakeAllIsRight();
    }
  }

  function restartGame() {
    setCards(shuffleCards(cards));
    setIsBeginning(true);
    setIsWinner(false);
    setPoints(0);
  }

  useEffect(() => {
    if (isBeginning) {
      setTimeout(makeAllIsNotFlipped, timeBeginning);
    }
    // eslint-disable-next-line
  }, [isBeginning]);
  useEffect(() => {
    if (flippedCards.length === 2) {
      setFlippedCards([]);

      if (checkIsRight()) {
        makeIsRight();
        return;
      }

      setIsOnCoolDown(true);
      setTimeout(() => {
        unmakeIsFlipped();
        setIsOnCoolDown(false);
      }, timeCanFlip);
    }
    // eslint-disable-next-line
  }, [flippedCards]);
  return (
    <Container>
      <GameContext.Provider
        value={{
          cards,
          makeIsFlipped,
          isBeginning,
          points,
          isOnCoolDown,
          restartGame,
        }}
      >
        <Board />
        {isWinner ? <WinGame /> : null}
      </GameContext.Provider>
    </Container>
  );
}

export default Game;
