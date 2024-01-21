import styled, { css } from 'styled-components';

interface IContentInputProps {
  $isFocused: boolean;
  $isError: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

export const Title = styled.span`
  size: 14px;
  font-weight: 700;
  color: #002859;
`;

export const ContentInput = styled.div<IContentInputProps>`
  display: flex;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e5e9f2;
  padding: 18px 12px;
  margin-top: 4px;

  svg {
    margin-right: 8px;
  }

  input {
    width: 100%;
    background: transparent;
    border: 0;
    color: #002859;

    &::placeholder {
      color: #647184;
    }
  }

  ${props =>
    props.$isFocused &&
    css`
      border-color: #002859;
    `}

  ${props =>
    props.$isError &&
    css`
      border-color: #c53030;
    `}
`;

export const Error = styled.span`
  display: flex;
  margin-top: 4px;
  margin-bottom: -18px;

  font-size: 12px;
  color: #c53030;
`;
