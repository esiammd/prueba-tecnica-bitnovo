import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiChevronRight } from 'react-icons/fi';
import { FaCircleCheck } from 'react-icons/fa6';
import { Form } from '@unform/web';
import { type FormHandles } from '@unform/core';

import Search from '../../components/Search';
import Footer from '../../components/Footer';

import bitcoinImg from '../../assets/coins/bitcoin.svg';
import ethereumImg from '../../assets/coins/ethereum.svg';
import litecoinImg from '../../assets/coins/litecoin.svg';
import polygonImg from '../../assets/coins/polygon.svg';
import rippleImg from '../../assets/coins/ripple.svg';
import usdCoinImg from '../../assets/coins/usd-coin.svg';

import {
  Container,
  Content,
  Header,
  Title,
  Coins,
  Coin,
  CoinName,
} from './styles';

interface ICoinsProps {
  icon: string;
  name: string;
  acronym: string;
  selected: boolean;
}

interface IFormData {
  search: string;
}

const SelectCoin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const [coinSelected, setcoinSelected] = useState('');

  const coins: ICoinsProps[] = [
    {
      icon: bitcoinImg,
      name: 'Bitcoin',
      acronym: 'BTC',
      selected: true,
    },
    {
      icon: ethereumImg,
      name: 'Ethereum',
      acronym: 'ETH',
      selected: false,
    },
    {
      icon: litecoinImg,
      name: 'Litecoin',
      acronym: 'LTC',
      selected: false,
    },
    {
      icon: polygonImg,
      name: 'Polygon',
      acronym: 'MATIC',
      selected: false,
    },
    {
      icon: rippleImg,
      name: 'Ripple',
      acronym: 'XRP',
      selected: false,
    },
    {
      icon: usdCoinImg,
      name: 'USD Coin',
      acronym: 'USDC',
      selected: false,
    },
  ];

  const handleNavigateToHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleSubmitForm = useCallback(async (data: IFormData) => {
    console.log(data);
  }, []);

  const handleCoinSelected = useCallback(async (coin: ICoinsProps) => {
    console.log(coin);
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <Title>Seleccionar criptomoneda</Title>
          <button onClick={handleNavigateToHome}>
            <FiX size={22} color="#002859" />
          </button>
        </Header>

        <Form ref={formRef} onSubmit={handleSubmitForm}>
          <Search name="search" />
        </Form>

        <Coins>
          {coins.map(coin => (
            <Coin
              key={coin.name}
              onClick={async () => {
                await handleCoinSelected(coin);
              }}
            >
              <CoinName>
                <img src={coin.icon} alt={coin.name} />
                <div>
                  <span>{coin.name}</span>
                  <span>{coin.acronym}</span>
                </div>
              </CoinName>

              {coin.selected ? (
                <FaCircleCheck size={16} color="#71B0FD" />
              ) : (
                <FiChevronRight size={16} color="#647184" />
              )}
            </Coin>
          ))}
        </Coins>
      </Content>

      <Footer />
    </Container>
  );
};

export default SelectCoin;
