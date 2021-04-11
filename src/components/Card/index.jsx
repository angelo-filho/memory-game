import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../Game/GameContext';

import { Container, CardFront, CardBack } from './styles';

function Card({ id, name, isFlipped, isRight }) {
  const { makeIsFlipped, isOnCoolDown } = useContext(GameContext);

  const [tranforms, setTransforms] = useState({
    front: {
      transform: `perspective(600px) rotateY(0deg)`,
    },
    back: {
      transform: `perspective(600px) rotateY(180deg)`,
    },
  });

  function flipCard(inverse = false) {
    if (inverse) {
      setTransforms({
        front: {
          transform: `perspective(600px) rotateY(-180deg)`,
        },
        back: {
          transform: `perspective(600px) rotateY(0deg)`,
        },
      });
    } else {
      setTransforms({
        front: {
          transform: `perspective(600px) rotateY(0deg)`,
        },
        back: {
          transform: `perspective(600px) rotateY(180deg)`,
        },
      });
    }
  }

  useEffect(() => {
    if (isFlipped || isRight) {
      flipCard();
    } else {
      flipCard(true);
    }
  }, [isFlipped, isRight]);

  return (
    <Container
      onClick={
        !isFlipped && !isRight && !isOnCoolDown
          ? () => {
              makeIsFlipped(id);
            }
          : null
      }
    >
      <CardFront
        style={{
          transform: tranforms.front.transform,
        }}
      >
        <span>{name}</span>
      </CardFront>
      <CardBack
        style={{
          transform: tranforms.back.transform,
        }}
      >
        <span>?</span>
      </CardBack>
    </Container>
  );
}

export default Card;
