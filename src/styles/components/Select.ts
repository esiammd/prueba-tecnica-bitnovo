import styled, { css } from 'styled-components';

interface IInputContentProps {
  $isFocused: boolean;
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
  font-size: 14px;
  font-weight: 700;
  color: #002859;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 4px;

    &:hover {
      cursor: pointer;
    }
  }

  span:last-child {
    border: 1px solid #647184;
    border-radius: 4px 4px 4px 0px;
    padding: 2px;

    position: relative;
    top: -18px;

    font-size: 12px;
    font-weight: 400;
    color: #647184;

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

export const InputContent = styled.div<IInputContentProps>`
  display: flex;
  height: 56px;
  align-items: center;

  background: #fff;
  border-radius: 10px;
  border: 1px solid #e5e9f2;
  padding: 18px 12px;
  margin-top: 4px;

  ${props =>
    props.$isFocused &&
    css`
      border-color: #002859;
    `}

  img {
    margin-right: 8px;
  }

  svg {
    margin-right: 8px;

    &:hover {
      cursor: pointer;
    }
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
`;
