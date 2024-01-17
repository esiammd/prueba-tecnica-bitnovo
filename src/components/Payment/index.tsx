import React, { useCallback, useState } from 'react';

import Button from '../Button';

import timeImg from '../../assets/icons/timer.svg';
import copyImg from '../../assets/icons/copy.svg';
import warningImg from '../../assets/icons/warning.svg';

import {
  Container,
  Title,
  Content,
  Timer,
  QRCode,
  Type,
  QRCodeImg,
  Data,
  Send,
  Key,
  Tag,
} from './styles';

const Payment: React.FC = () => {
  const [qrCodeType, setQrCodeType] = useState('smart');

  const handleQRCodeType = useCallback((type: string) => {
    setQrCodeType(type);
  }, []);

  return (
    <Container>
      <Title>Realiza el pago</Title>

      <Content>
        <Timer>
          <img src={timeImg} alt="reloj" />
          05:08
        </Timer>

        <QRCode>
          <Type $qrCodeType={qrCodeType}>
            <Button
              className="smart"
              onClick={() => {
                handleQRCodeType('smart');
              }}
            >
              Smart QR
            </Button>
            <Button
              className="web"
              onClick={() => {
                handleQRCodeType('web');
              }}
            >
              Web3
            </Button>
          </Type>

          <QRCodeImg />
        </QRCode>

        <Data>
          <Send>
            <span>Enviar</span>
            <strong>108,02 XRP</strong>
            <img src={copyImg} alt="copiar" />
          </Send>

          <Key>
            <span>
              Xp4Lw2PtQgB7RmedTak143LrXp4Lw2PtQgB7RmedEV731CdTak143LrXp4L
            </span>
            <img src={copyImg} alt="copiar" />
          </Key>

          <Tag>
            <img src={warningImg} alt="advertencia" />
            <span>Etiqueta de destino: 2557164061</span>
            <img src={copyImg} alt="copiar" />
          </Tag>
        </Data>
      </Content>
    </Container>
  );
};

export default Payment;
