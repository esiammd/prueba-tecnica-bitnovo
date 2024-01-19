import React from 'react';
import Image from 'next/image';

import {
  Container,
  Title,
  Content,
  Amount,
  Coin,
  Business,
  Trade,
  Date,
  Description,
} from '../styles/components/Summary';

const Summary: React.FC = () => {
  return (
    <Container>
      <Title>Resumen del pedido</Title>

      <Content>
        <Amount>
          <span>Importe:</span>
          <span>56,06 EUR</span>
        </Amount>

        <Coin>
          <span>Moneda seleccionada:</span>
          <span>
            <Image
              src="/coins/ripple.svg"
              alt="Icono de Moneda"
              width={20}
              height={20}
            />
            XRP
          </span>
        </Coin>

        <Business>
          <Trade>
            <span>Comercio:</span>
            <span>
              <Image
                src="/icons/verify.svg"
                alt="Verificado"
                width={24}
                height={24}
              />
              Comercio de pruebas de Semega
            </span>
          </Trade>

          <Date>
            <span>Fecha:</span>
            <span>21/01/2022 08:52</span>
          </Date>
        </Business>

        <Description>
          <span>Concepto:</span>
          <span>Viajes & Ocio</span>
        </Description>
      </Content>
    </Container>
  );
};

export default Summary;
