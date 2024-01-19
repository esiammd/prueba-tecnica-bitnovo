import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  size: 30px;
  text-align: center;
  color: #002859;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  width: 673px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
