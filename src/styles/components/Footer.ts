import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  margin-bottom: 32px;

  span {
    font-size: 12px;
    font-weight: 700;
    color: #c0ccda;

    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #c0ccda;
  }
`;
