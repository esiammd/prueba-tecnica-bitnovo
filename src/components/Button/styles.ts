import styled from 'styled-components';

export const Container = styled.button`
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
  }
`;
