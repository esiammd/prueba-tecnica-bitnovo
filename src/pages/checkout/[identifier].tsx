import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { type GetServerSideProps } from 'next';

import api from '../../services/api';

import { type ICoinProps } from '..';
import Summary, { type ISummaryProps } from '../../components/summary';
import Payment, { type IPaymentProps } from '../../components/payment';
import Footer from '../../components/footer';

import { Container, Content } from '../../styles/pages/Checkout';

interface IOrderProps {
  fiat_amount: number;
  fiat: string;
  currency_id: string;
  merchant_device: string;
  created_at: string;
  notes: string;
  crypto_amount: number;
  address: string;
  tag_memo: string;
  expired_time: string;
  status: string;
}

interface ICheckoutProps {
  identifier: string;
  summary: ISummaryProps;
  payment: IPaymentProps;
}

const Checkout: React.FC<ICheckoutProps> = ({
  identifier,
  summary,
  payment,
}) => {
  const socket = useRef<WebSocket | null>(null);
  const [paymentStatus, setPaymentStatus] = useState(payment.status);

  useEffect(() => {
    socket.current = new WebSocket(
      `wss://payments.pre-bnvo.com/ws/${identifier}`,
    );
    socket.current.addEventListener('message', message => {
      setPaymentStatus(JSON.parse(message.data as string).status as string);
    });

    return () => {
      socket.current?.close();
    };
  }, [identifier]);

  return (
    <>
      <Head>
        <title>Bitnovo | Checkout</title>
      </Head>

      <Container>
        <Content>
          <Summary
            amount={summary.amount}
            coin={summary.coin}
            merchant={summary.merchant}
            createdAt={summary.createdAt}
            description={summary.description}
          />
          <Payment
            expectedAmount={payment.expectedAmount}
            address={payment.address}
            destinationTag={payment.destinationTag}
            expiredTime={payment.expiredTime}
            paymentURI={payment.paymentURI}
            status={paymentStatus}
          />
        </Content>

        <Footer />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  ICheckoutProps
> = async context => {
  const { payment_uri } = context.query as Record<string, string>;

  const { identifier } = context.params as Record<string, string>;
  const response = await api.get(`/orders/info/${identifier}/`);
  const order: IOrderProps = response.data[0];

  const currencies: ICoinProps[] = (await api.get(`/currencies/`)).data;
  const currency = currencies.filter(
    currency => currency.symbol === order.currency_id,
  );

  const summary = {
    amount: {
      value: order.fiat_amount,
      fiat: order.fiat,
    },
    coin: {
      image: currency[0].image,
      symbol: order.currency_id,
    },
    merchant: order.merchant_device,
    createdAt: order.created_at,
    description: order.notes,
  };

  const payment = {
    expectedAmount: {
      value: order.crypto_amount,
      fiat: order.currency_id,
    },
    address: order.address,
    destinationTag: order.tag_memo,
    expiredTime: order.expired_time,
    paymentURI: payment_uri,
    status: order.status,
  };

  return {
    props: {
      identifier,
      summary,
      payment,
    },
  };
};

export default Checkout;
