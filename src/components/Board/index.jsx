import React, { useContext } from 'react';
import Card from '../Card';
import GameContext from '../Game/GameContext';

import { Container } from './styles';

function Board() {
  const { cards } = useContext(GameContext);

  return (
    <Container>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            <Card
              id={index}
              name={card.name}
              isFlipped={card.isFlipped}
              isRight={card.isRight}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Board;
