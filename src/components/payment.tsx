import React, { useCallback, useState } from 'react';
import Image from 'next/image';

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
} from '../styles/components/Payment';

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
          <Image src="/icons/timer.svg" alt="reloj" width={24} height={24} />
          05:08
        </Timer>

        <QRCode>
          <Type $qrCodeType={qrCodeType}>
            <button
              className="smart"
              onClick={() => {
                handleQRCodeType('smart');
              }}
            >
              Smart QR
            </button>
            <button
              className="web"
              onClick={() => {
                handleQRCodeType('web');
              }}
            >
              Web3
            </button>
          </Type>

          <QRCodeImg />
        </QRCode>

        <Data>
          <Send>
            <span>Enviar</span>
            <strong>108,02 XRP</strong>
            <Image src="/icons/copy.svg" alt="copiar" width={18} height={18} />
          </Send>

          <Key>
            <span>
              Xp4Lw2PtQgB7RmedTak143LrXp4Lw2PtQgB7RmedEV731CdTak143LrXp4L
            </span>
            <Image src="/icons/copy.svg" alt="copiar" width={18} height={18} />
          </Key>

          <Tag>
            <Image
              src="/icons/warning.svg"
              alt="advertencia"
              width={24}
              height={24}
            />
            <span>Etiqueta de destino: 2557164061</span>
            <Image src="/icons/copy.svg" alt="copiar" width={18} height={18} />
          </Tag>
        </Data>
      </Content>
    </Container>
  );
};

export default Payment;
