import React from 'react';

import coinImg from '../../assets/coins/ripple.svg';
import verifyImg from '../../assets/icons/verify.svg';

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
} from './styles';

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
            <img src={coinImg} alt="Icono de Moneda" />
            XRP
          </span>
        </Coin>

        <Business>
          <Trade>
            <span>Comercio:</span>
            <span>
              <img src={verifyImg} alt="Verificado" />
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
