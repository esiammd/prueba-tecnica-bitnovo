import React from 'react';
import Head from 'next/head';

import Summary from '../components/summary';
import Payment from '../components/payment';
import Footer from '../components/footer';

import { Container, Content } from '../styles/pages/Checkout';

const Checkout: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bitnovo | Checkout</title>
      </Head>

      <Container>
        <Content>
          <Summary />
          <Payment />
        </Content>

        <Footer />
      </Container>
    </>
  );
};

export default Checkout;
