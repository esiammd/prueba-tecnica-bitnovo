import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from '../components/button';
import Footer from '../components/footer';

import {
  Container,
  Content,
  Title,
  Description,
} from '../styles/pages/Canceled';

const Canceled: React.FC = () => {
  const router = useRouter();

  const handleNavigateToHome = useCallback(() => {
    router.replace('/');
  }, [router]);

  return (
    <Container>
      <Content>
        <Image
          src="/icons/canceled.svg"
          alt="Canceled"
          width={80}
          height={80}
        />

        <Title>¡Pago cancelado!</Title>

        <Description>
          Lorem ipsum dolor sit amet consectetur. Laoreet blandit auctor et
          varius dolor elit facilisi enim. Nulla ut ut eu nunc.
        </Description>

        <Button type="button" onClick={handleNavigateToHome}>
          Crear nuevo pago
        </Button>

        <Footer />
      </Content>
    </Container>
  );
};

export default Canceled;
