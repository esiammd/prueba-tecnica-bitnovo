import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import useCountdown from '../hooks/use-countdown';

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
  expiredTime: string;
  paymentURI: string;
  status: string;
}

const Payment: React.FC<IPaymentProps> = ({
  expectedAmount,
  address,
  destinationTag,
  expiredTime,
  paymentURI,
  status,
}) => {
  const router = useRouter();
  const countdownValue = useCountdown(new Date(expiredTime));

  const handleCopyText = useCallback(async (text: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    }
  }, []);

  useEffect(() => {
    if (['CO', 'AC'].includes(status)) {
      router.push('/success');
    }
  }, [status, expiredTime, router]);

  useEffect(() => {
    if (
      ['EX', 'OC'].includes(status) ||
      new Date().valueOf() > new Date(expiredTime).valueOf()
    ) {
      router.push('/canceled');
    }
  }, [status, expiredTime, router]);

  return (
    <Container>
      <Title>Realiza el pago</Title>

      <Content>
        <Timer suppressHydrationWarning>
          <Image src="/icons/timer.svg" alt="reloj" width={24} height={24} />
          {countdownValue}
        </Timer>

        <QRCode>
          <Type>Smart QR</Type>

          <QRCodeImg value={paymentURI} />
        </QRCode>

        <Data>
          <Send>
            <span>Enviar</span>
            <strong>{`${expectedAmount.value.toString().replace('.', ',')} ${expectedAmount.fiat}`}</strong>
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
