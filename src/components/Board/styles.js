import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  padding: 0 160px;

  ul {
    list-style: none;

    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      margin: 0 2rem 2rem 0;
    }
  }
`;
