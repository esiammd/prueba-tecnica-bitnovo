import styled, { css } from 'styled-components';

interface IContainer {
  $isLoading: boolean;
}

export const Container = styled.button<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #035ac5;
  height: 56px;
  border-radius: 6px;
  border: 0;
  padding: 18px, 24px;
  color: #fff;
  width: 100%;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background: #c6dffe;
    opacity: 1;
    cursor: auto;
  }

  ${props =>
    props.$isLoading &&
    css`
      background: #c6dffe;
    `}
`;

export const Loading = styled.div`
  display: flex;
  animation: is-rotating 1s infinite;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
