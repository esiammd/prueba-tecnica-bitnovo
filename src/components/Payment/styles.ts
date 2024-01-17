import styled, { css } from 'styled-components';

interface ITypeProps {
  $qrCodeType: string;
}

export const Container = styled.div`
  width: 583px;
  margin-right: 32px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #002859;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f9fafc;
  border-radius: 16px;
  margin-top: 24px;
  padding: 32px;

  background: #fff;
  border-radius: 16px;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.4);
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;

  font-size: 12px;
  font-weight: 600;
`;

export const QRCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0px;
`;

export const Type = styled.div<ITypeProps>`
  display: flex;
  font-size: 14px;
  margin-bottom: 32px;

  Button:first-child {
    margin-right: 16px;
  }

  Button {
    width: auto;
    height: 32px;
    padding: 6px 12px;
    border-radius: 100px;

    font-size: 16px;
    background: #f9fafc;
    color: #647184;

    &:hover {
      opacity: 0.8;
    }
  }

  .smart {
    ${props =>
      props.$qrCodeType === 'smart' &&
      css`
        background: #035ac5;
        color: #fff;
      `}
  }

  .web {
    ${props =>
      props.$qrCodeType === 'web' &&
      css`
        background: #035ac5;
        color: #fff;
      `}
  }
`;

export const QRCodeImg = styled.div`
  width: 193px;
  height: 193px;
  border-radius: 10px;

  background-color: black;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 416px;

  color: #002859;
`;

export const Send = styled.span`
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: 700;
  }

  strong {
    font-size: 20px;
    margin: 0px 8px;
  }
`;

export const Key = styled.span`
  display: flex;
  align-items: start;
  margin: 12px 0px;

  span {
    width: 390px;
    margin-right: 8px;

    font-size: 12px;
    font-weight: 600;
    text-align: center;
    word-break: break-word;
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;

  span {
    margin: 0px 8px;
    font-size: 14px;
  }
`;
