import React, { useCallback, useState } from 'react';
import { type GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useForm, type SubmitHandler } from 'react-hook-form';

import formatCurrency from '../utils/formatCurrency';
import parseCurrency from '../utils/parseCurrency';

import api from '../services/api';

import Input from '../components/input';
import Select from '../components/select';
import Button from '../components/button';
import Footer from '../components/footer';
import SelectCoin from '../components/select-coin';

import { Container, Title, Form } from '../styles/pages/Home';

interface IFormData {
  amount: string;
  coin: ICoinProps;
  description: string;
}

export interface ICoinProps {
  symbol: string;
  name: string;
  min_amount: string;
  max_amount: string;
  image: string;
  blockchain: string;
}

interface IHomeProps {
  coins: ICoinProps[];
}

const Home: React.FC<IHomeProps> = ({ coins }) => {
  const { handleSubmit, register, setValue, getValues, formState } =
    useForm<IFormData>({
      mode: 'onChange',
      defaultValues: {
        amount: '',
        coin: coins[0],
        description: '',
      },
    });

  const [isLoading, setIsLoading] = useState(false);
  const [showCoinSelector, setShowCoinSelector] = useState(false);
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const router = useRouter();

  const registerWithInnerRef = useCallback(
    (...args: Parameters<typeof register>) => {
      const { ref: innerRef, ...registerResult } = register(...args);
      return { innerRef, ...registerResult };
    },
    [register],
  );

  const handleShowCoinSelector = useCallback(() => {
    if (!isLoading) {
      setShowCoinSelector(!showCoinSelector);
    }
  }, [isLoading, showCoinSelector]);

  const handleItemCoinSelector = useCallback(
    (coin: ICoinProps) => {
      setValue('coin', coin);
    },
    [setValue],
  );

  const handleFilterCoins = useCallback(() => {
    return coins.filter(
      coin =>
        Number.parseFloat(
          getValues('amount').replaceAll('.', '').replaceAll(',', '.'),
        ) >= Number.parseFloat(coin.min_amount) &&
        Number.parseFloat(
          getValues('amount').replaceAll('.', '').replaceAll(',', '.'),
        ) <= Number.parseFloat(coin.max_amount),
    );
  }, [coins, getValues]);

  const handleAmountFormat = useCallback(
    (value: string) => {
      setValue('amount', formatCurrency(value), { shouldValidate: true });
    },
    [setValue],
  );

  const handleAmountChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      handleAmountFormat(event.currentTarget.value);

      getValues('amount') === ''
        ? setFilteredCoins(coins)
        : setFilteredCoins(handleFilterCoins());
    },
    [handleAmountFormat, handleFilterCoins, setFilteredCoins, coins, getValues],
  );

  const handleSubmitForm: SubmitHandler<IFormData> = useCallback(
    async (data: IFormData) => {
      setIsLoading(true);
      const response = await api.post('/orders/', {
        expected_output_amount: parseCurrency(data.amount),
        input_currency: data.coin.symbol,
        notes: data.description,
      });
      setIsLoading(false);

      router.push({
        pathname: `/checkout/${response.data.identifier}`,
        query: { payment_uri: response.data.payment_uri },
      });
    },
    [router],
  );

  return (
    <>
      <Head>
        <title>Bitnovo | Crear pago</title>
      </Head>

      <Container>
        {!showCoinSelector ? (
          <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Title>Crear pago</Title>
            <Input
              label="Importe a pagar"
              placeholder="Añade importe a pagar"
              error={formState.errors.amount?.message}
              {...registerWithInnerRef('amount', {
                required: 'Campo obligatorio.',
                onChange: handleAmountChange,
                validate: {
                  minValue: value =>
                    parseCurrency(value as string) >=
                      Number.parseFloat(getValues('coin').min_amount) ||
                    `El importe mínimo para la moneda seleccionada es ${formatCurrency(getValues('coin').min_amount)}.`,
                  maxValue: value =>
                    parseCurrency(value as string) <=
                      Number.parseFloat(getValues('coin').max_amount) ||
                    `El importe máximo para la moneda seleccionada es ${formatCurrency(getValues('coin').max_amount)}.`,
                },
              })}
              disabled={isLoading}
            />

            <Select
              label="Seleccionar moneda"
              image={getValues('coin').image}
              error={formState.errors.coin?.message}
              onClick={handleShowCoinSelector}
              {...registerWithInnerRef('coin.name', {
                required: 'Campo obligatorio.',
              })}
              disabled={isLoading}
            />

            <Input
              label="Concepto"
              placeholder="Añade descripción del pago"
              error={formState.errors.description?.message}
              {...registerWithInnerRef('description', {
                required: 'Campo obligatorio.',
              })}
              disabled={isLoading}
            />

            <Button
              type="submit"
              disabled={!formState.isValid || isLoading}
              isLoading={isLoading}
            >
              Continuar
            </Button>
          </Form>
        ) : (
          <SelectCoin
            coins={filteredCoins}
            selectCoin={getValues('coin').name}
            changeItem={handleItemCoinSelector}
            closeComponent={handleShowCoinSelector}
          />
        )}

        <Footer />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const response = await api.get('/currencies/');

  return {
    props: {
      coins: response.data,
    },
  };
};

export default Home;
