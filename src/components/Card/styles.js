import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 120px;
  height: 120px;

  cursor: pointer;
`;

export const CardFront = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: var(--black);

  border-radius: 8px;

  transition: 0.6s;
`;

export const CardBack = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 2rem;

  background: var(--green);

  border-radius: 8px;

  backface-visibility: hidden;

  transition: 0.6s;
`;
