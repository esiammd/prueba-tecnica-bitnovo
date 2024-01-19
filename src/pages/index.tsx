import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useForm, type SubmitHandler } from 'react-hook-form';

import formatCurrency from '../utils/formatCurrency';
import { type ICoinProps, coins } from '../utils/coins';

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

const Home: React.FC = () => {
  const { handleSubmit, register, setValue, getValues, formState } =
    useForm<IFormData>({
      defaultValues: {
        amount: '',
        coin: coins[0],
        description: '',
      },
    });
  const [showCoinSelector, setShowCoinSelector] = useState(false);
  const router = useRouter();

  const registerWithInnerRef = useCallback(
    (...args: Parameters<typeof register>) => {
      const { ref: innerRef, ...registerResult } = register(...args);
      return { innerRef, ...registerResult };
    },
    [register],
  );

  const handleAmountFormat = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setValue('amount', formatCurrency(event.currentTarget.value));
    },
    [setValue],
  );

  const handleShowCoinSelector = useCallback(() => {
    setShowCoinSelector(!showCoinSelector);
  }, [showCoinSelector]);

  const handleItemCoinSelector = useCallback(
    (coin: ICoinProps) => {
      setValue('coin', coin);
    },
    [setValue],
  );

  const handleSubmitForm: SubmitHandler<IFormData> = useCallback(
    async (data: IFormData) => {
      console.log(data);
      router.push('/checkout');
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
              onKeyUp={handleAmountFormat}
              {...registerWithInnerRef('amount', { required: true, min: 0 })}
            />

            <Select
              label="Seleccionar moneda"
              image={getValues().coin.image}
              onClick={handleShowCoinSelector}
              {...registerWithInnerRef('coin.name', { required: true })}
            />

            <Input
              label="Concepto"
              placeholder="Añade descripción del pago"
              {...registerWithInnerRef('description', { required: true })}
            />

            <Button type="submit" disabled={!formState.isValid}>
              Continuar
            </Button>
          </Form>
        ) : (
          <SelectCoin
            selectItem={getValues().coin}
            changeItem={handleItemCoinSelector}
            closeComponent={handleShowCoinSelector}
          />
        )}

        <Footer />
      </Container>
    </>
  );
};

export default Home;
