import styled, { css } from 'styled-components';

interface IContentInputProps {
  $isFocused: boolean;
  $isError: boolean;
  $isDisabled: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  min-width: max-content;
  font-size: 14px;
  font-weight: 700;
  color: #002859;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    margin-left: 4px;

    &:hover {
      cursor: pointer;
    }
  }

  span {
    position: absolute;
    bottom: 14px;
    left: 16px;
    width: 180px;

    background-color: #fff;
    border: 1px solid #647184;
    border-radius: 4px 4px 4px 0px;
    padding: 4px;

    font-size: 12px;
    font-weight: 400;
    color: #647184;

    display: none;
  }

  &:hover span {
    display: block;
  }
`;

export const ContentInput = styled.div<IContentInputProps>`
  display: flex;
  height: 56px;
  align-items: center;

  background: #fff;
  border-radius: 10px;
  border: 1px solid #e5e9f2;
  padding: 18px 12px;
  margin-top: 4px;

  img {
    margin-right: 8px;
  }

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

    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    cursor: pointer;
  }

  ${props =>
    props.$isFocused &&
    css`
      border-color: #002859;
      svg {
        color: #002859 !important;
      }
    `}

  ${props =>
    props.$isError &&
    css`
      border-color: #c53030;
      svg {
        color: #c53030 !important;
      }

      &:hover {
        cursor: default;
      }

      &:hover input {
        cursor: default;
      }
    `}

  ${props =>
    props.$isDisabled &&
    css`
      border-color: #e5e9f2;
      svg {
        color: #647184 !important;
      }

      cursor: default !important;
      input {
        cursor: default !important;
      }
    `}
`;

export const Error = styled.span`
  display: flex;
  margin-top: 4px;
  margin-bottom: -18px;

  font-size: 12px;
  color: #c53030;
`;
