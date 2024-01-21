import styled from 'styled-components';

export const Container = styled.div`
  width: 583px;
  margin-right: 32px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #002859;
`;

export const Content = styled.div`
  background: #f9fafc;
  border-radius: 16px;
  margin-top: 24px;
  padding: 0px 32px;

  div {
    padding: 32px 0px;
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 16px;
    font-weight: 600;

    color: #002859;

    @media (max-width: 900px) {
      font-size: 14px;
    }
  }
`;

export const Amount = styled.div`
  span {
    font-size: 18px;
    font-weight: 700;

    @media (max-width: 900px) {
      font-size: 16px;
    }
  }
`;

export const Coin = styled.div`
  border-top: 1px solid #c0ccda;

  span {
    display: flex;
    align-items: center;
    place-content: center;
    font-weight: 700;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const Business = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c0ccda;

  div {
    padding: 0px;
  }
`;

export const Merchant = styled.div`
  span:first-child {
    font-weight: 700;
  }

  span {
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 2px;
  }
`;

export const PaymentCreationDate = styled.div`
  margin-top: 32px;

  span:first-child {
    font-weight: 700;
  }
`;

export const Description = styled.div`
  border-top: 1px solid #c0ccda;

  span:first-child {
    font-weight: 700;
  }
`;
