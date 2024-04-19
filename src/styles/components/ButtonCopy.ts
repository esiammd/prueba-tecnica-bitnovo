import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  border: 0;
  background: transparent;
  transition: background-color 0.2s;

  span {
    position: absolute;
    bottom: 20px;
    left: 16px;

    background-color: #002859;
    border-radius: 4px 4px 4px 0px;
    padding: 4px;

    font-size: 12px !important;
    font-weight: 400 !important;
    color: #fff;
  }

  img:hover {
    opacity: 0.8;
  }

  @media (max-width: 650px) {
  }
`;
