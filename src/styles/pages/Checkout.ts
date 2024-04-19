import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: start;

  @media (max-width: 1300px) {
    height: calc(100vh - 200px);
    padding: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;

    div {
      margin-right: 0;
    }

    div:first-child {
      margin-bottom: 32px;
    }
  }

  @media (max-width: 900px) {
    width: 483px;
  }

  @media (max-width: 680px) {
    width: 383px;
  }

  @media (max-width: 580px) {
    width: 350px;
  }
`;
