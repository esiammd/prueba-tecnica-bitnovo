import React, { useCallback, useState } from 'react';
import Image from 'next/image';

import ButtonCopy from './button-copy';

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
  Address,
  Tag,
} from '../styles/components/Payment';

export interface IPaymentProps {
  expectedAmount: {
    value: number;
    fiat: string;
  };
  address: string;
  destinationTag: string;
}

const Payment: React.FC<IPaymentProps> = ({
  expectedAmount,
  address,
  destinationTag,
}) => {
  const [qrCodeType, setQrCodeType] = useState('smart');

  const handleQRCodeType = useCallback((type: string) => {
    setQrCodeType(type);
  }, []);

  const handleCopyText = useCallback(async (text: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    }
  }, []);

  return (
    <Container>
      <Title>Realiza el pago</Title>

      <Content>
        <Timer>
          <Image src="/icons/timer.svg" alt="reloj" width={24} height={24} />
          05:08 (FALTA)
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
            <strong>{`${expectedAmount.value.toFixed(2).replace('.', ',')} ${expectedAmount.fiat}`}</strong>
            <ButtonCopy
              onClick={() => {
                handleCopyText(expectedAmount.value.toString());
              }}
            />
          </Send>

          <Address>
            <span>{address}</span>
            <ButtonCopy
              onClick={() => {
                handleCopyText(address);
              }}
            />
          </Address>

          {destinationTag && (
            <Tag>
              <Image
                src="/icons/warning.svg"
                alt="advertencia"
                width={24}
                height={24}
              />
              <span>Etiqueta de destino: {destinationTag}</span>
              <ButtonCopy
                onClick={() => {
                  handleCopyText(destinationTag);
                }}
              />
            </Tag>
          )}
        </Data>
      </Content>
    </Container>
  );
};

export default Payment;
