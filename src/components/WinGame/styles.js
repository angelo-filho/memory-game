import styled from 'styled-components';

import Trophy from './icons';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);
`;

export const Box = styled.div`
  width: 450px;
  height: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--black);
`;

export const TrophyIcon = styled(Trophy)`
  width: 144px;
  height: 144px;
`;

export const Message = styled.div`
  margin: 3rem 0;

  font-size: 1.5rem;
  font-weight: 600;
  line-height: 0.5rem;
`;

export const Button = styled.button`
  border: none;

  display: block;

  width: 220px;
  height: 50px;

  background: var(--green);
  border-radius: 6px;

  font-weight: 600;
  font-size: 1rem;
  color: var(--black);

  transition: 0.2s;

  cursor: pointer;

  &:hover {
    filter: brightness(0.94);
  }
`;
