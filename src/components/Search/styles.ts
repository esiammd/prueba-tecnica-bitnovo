import styled, { css } from 'styled-components';

interface IInputContentProps {
  $isFocused: boolean;
}

export const Container = styled.div<IInputContentProps>`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 10px;
  border: 1px solid #e5e9f2;
  padding: 18px 12px;
  margin-top: 4px;

  svg {
    margin-right: 8px;
  }

  ${props =>
    props.$isFocused &&
    css`
      border-color: #002859;
    `}

  input {
    width: 100%;
    background: transparent;
    border: 0;
    color: #002859;

    &::placeholder {
      color: #647184;
    }
  }
`;
