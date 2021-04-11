import React, { useContext } from 'react';
import GameContext from '../Game/GameContext';

import { Container, Box, TrophyIcon, Message, Button } from './styles';

function WinGame() {
  const { restartGame } = useContext(GameContext);

  return (
    <Container>
      <Box>
        <TrophyIcon />
        <Message>Parabéns você venceu!</Message>
        <Button onClick={restartGame}>Restart Game</Button>
      </Box>
    </Container>
  );
}

export default WinGame;
