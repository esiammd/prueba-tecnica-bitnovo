import { QRCodeSVG } from 'qrcode.react';
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

export const Timer = styled.span`
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

export const Type = styled.span`
  display: flex;
  margin-bottom: 32px;
  padding: 6px 12px;
  height: 32px;

  background: #035ac5;
  border-radius: 100px;
  border: none;

  font-size: 16px;
  color: #fff;
`;

export const QRCodeImg = styled(QRCodeSVG)`
  width: 193px;
  height: 193px;
  border-radius: 10px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 416px;

  color: #002859;
`;

export const Send = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 600;
  }

  strong {
    font-size: 20px;
    font-weight: 700;
    margin: 0px 8px;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: start;
  margin-top: -12px;

  small {
    max-width: 390px;
    margin-right: 8px;

    text-align: center;
    word-break: break-word;

    @media (max-width: 900px) {
      width: 200px;
    }
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  margin-top: 12px;

  small {
    margin: 0px 8px;
    font-weight: 600;
  }
`;
