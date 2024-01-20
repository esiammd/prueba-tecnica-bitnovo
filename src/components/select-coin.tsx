import React, { useCallback, useState } from 'react';
import { FiX, FiChevronRight, FiSearch, FiAlertTriangle } from 'react-icons/fi';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { type ICoinProps } from '../pages/index';

import Input from './input';

import {
  Container,
  Header,
  Title,
  Coins,
  Coin,
  CoinName,
  Message,
} from '../styles/components/SelectCoin';

interface ISelectCoinProps {
  coins: ICoinProps[];
  selectCoin: string;
  changeItem: (coin: ICoinProps) => void;
  closeComponent: () => void;
}

export interface IFormData {
  search: string;
}

const SelectCoin: React.FC<ISelectCoinProps> = ({
  coins,
  selectCoin,
  changeItem,
  closeComponent,
}) => {
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const { register } = useForm<IFormData>({
    defaultValues: {
      search: '',
    },
  });

  const registerWithInnerRef = useCallback(
    (...args: Parameters<typeof register>) => {
      const { ref: innerRef, ...registerResult } = register(...args);
      return { innerRef, ...registerResult };
    },
    [register],
  );

  const handleFilterCoins = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setFilteredCoins(
        coins.filter(coin =>
          coin.name
            .toLowerCase()
            .includes(event.currentTarget.value.toLowerCase()),
        ),
      );
    },
    [coins],
  );

  const handleCloseComponent = useCallback(() => {
    closeComponent();
  }, [closeComponent]);

  const handleCoinSelected = useCallback(
    async (coin: ICoinProps) => {
      changeItem(coin);
      closeComponent();
    },
    [changeItem, closeComponent],
  );

  return (
    <Container>
      <Header>
        <Title>Seleccionar criptomoneda</Title>
        <button onClick={handleCloseComponent}>
          <FiX size={22} color="#002859" />
        </button>
      </Header>

      <Input
        icon={FiSearch}
        {...registerWithInnerRef('search', {
          required: true,
          onChange: handleFilterCoins,
        })}
      />

      {filteredCoins.length !== 0 ? (
        <Coins>
          {filteredCoins.map(coin => (
            <Coin
              key={coin.name}
              onClick={async () => {
                await handleCoinSelected(coin);
              }}
            >
              <CoinName>
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={32}
                  height={32}
                />
                <div>
                  <span>{coin.name}</span>
                  <span>{coin.symbol}</span>
                </div>
              </CoinName>

              {coin.name === selectCoin ? (
                <FaCircleCheck size={16} color="#71B0FD" />
              ) : (
                <FiChevronRight size={16} color="#647184" />
              )}
            </Coin>
          ))}
        </Coins>
      ) : (
        <Message>
          <FiAlertTriangle size={16} />
          No hay criptomonedas disponibles para el importe informado.
        </Message>
      )}
    </Container>
  );
};

export default SelectCoin;
