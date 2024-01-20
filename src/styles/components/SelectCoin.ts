import styled from 'styled-components';

export const Container = styled.div`
  width: 673px;
  height: 588px;
  display: flex;
  flex-direction: column;
  padding: 32px;

  background: #fff;
  border-radius: 16px;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.4);

  @media (max-width: 850px) {
    width: 573px;
  }

  @media (max-width: 750px) {
    width: 473px;
  }

  @media (max-width: 650px) {
    width: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  button {
    display: flex;
    border: none;
    background: none;
  }
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #002859;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  border: 1px solid #e5e9f2;
  border-radius: 6px;
  padding: 14px 12px;

  color: #647184;

  svg {
    margin-right: 8px;
  }
`;

export const Coins = styled.ul`
  height: 100%;
  overflow-y: auto;
`;

export const Coin = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin-top: 22px;

  img {
    margin-right: 12px;
  }

  &:hover {
    background: #eff2f7;
    border-radius: 8px;
  }
`;

export const CoinName = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }

  span:first-child {
    font-size: 14px;
    font-weight: 700;
    color: #002859;
  }

  span:last-child {
    font-size: 12px;
    color: #647184;
  }
`;

export const Message = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #647184;

  svg {
    margin-right: 4px;
  }
`;
