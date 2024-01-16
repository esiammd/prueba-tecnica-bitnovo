import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 490px;
  height: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  padding-top: 77px;

  background: #fff;
  border-radius: 16px;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.4);

  @media (max-width: 650px) {
    width: auto;
  }
`;

export const Title = styled.h1`
  size: 20px;
  text-align: center;
  color: #002859;
  margin: 16px 0px;
`;

export const Description = styled.span`
  width: 360px;
  color: #647184;
  text-align: center;
  margin-bottom: 45.5px;

  @media (max-width: 450px) {
    width: auto;
  }
`;
