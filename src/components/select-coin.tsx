import React, { useCallback } from 'react';
import { FiX, FiChevronRight, FiSearch } from 'react-icons/fi';
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { type ICoinProps } from '../pages/index';

import {
  Container,
  Header,
  Form,
  Title,
  Coins,
  Coin,
  CoinName,
} from '../styles/components/SelectCoin';
import Input from './input';

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
  const { handleSubmit, register } = useForm<IFormData>({
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

  const handleSubmitForm: SubmitHandler<IFormData> = useCallback(
    async (data: IFormData) => {
      console.log(data);
    },
    [],
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

      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          icon={FiSearch}
          {...registerWithInnerRef('search', { required: true })}
        />
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
              <Image src={coin.image} alt={coin.name} width={32} height={32} />
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
    </Container>
  );
};

export default SelectCoin;
