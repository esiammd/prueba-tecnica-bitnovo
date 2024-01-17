import React from 'react';

import Summary from '../../components/Summary';
import Payment from '../../components/Payment';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';

const Checkout: React.FC = () => {
  return (
    <Container>
      <Content>
        <Summary />
        <Payment />
      </Content>

      <Footer />
    </Container>
  );
};

export default Checkout;
