import React from 'react';
import Image from 'next/image';

import formatCurrency from '../utils/formatCurrency';
import formatDate from '../utils/formatDate';

import {
  Container,
  Title,
  Content,
  Amount,
  Coin,
  Business,
  Merchant,
  PaymentCreationDate,
  Description,
} from '../styles/components/Summary';

export interface ISummaryProps {
  amount: {
    value: number;
    fiat: string;
  };
  coin: {
    image: string;
    symbol: string;
  };
  merchant: string;
  createdAt: string;
  description: string;
}

const Summary: React.FC<ISummaryProps> = ({
  amount,
  coin,
  merchant,
  createdAt,
  description,
}) => {
  return (
    <Container>
      <Title>Resumen del pedido</Title>

      <Content>
        <Amount>
          <span>Importe:</span>
          <span>{`${formatCurrency(amount.value.toString())} ${amount.fiat}`}</span>
        </Amount>

        <Coin>
          <span>Moneda seleccionada:</span>
          <span>
            <Image src={coin.image} alt={coin.symbol} width={20} height={20} />
            {coin.symbol}
          </span>
        </Coin>

        <Business>
          <Merchant>
            <span>Comercio:</span>
            <span>
              <Image
                src="/icons/verify.svg"
                alt="Verificado"
                width={24}
                height={24}
              />
              {merchant}
            </span>
          </Merchant>

          <PaymentCreationDate>
            <span>Fecha:</span>
            <span>{formatDate(createdAt)}</span>
          </PaymentCreationDate>
        </Business>

        <Description>
          <span>Concepto:</span>
          <span>{description}</span>
        </Description>
      </Content>
    </Container>
  );
};

export default Summary;
