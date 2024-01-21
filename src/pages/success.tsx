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
} from '../styles/pages/Success';

const Success: React.FC = () => {
  const router = useRouter();

  const handleNavigateToHome = useCallback(() => {
    router.replace('/');
  }, [router]);

  return (
    <Container>
      <Content>
        <Image src="/icons/success.svg" alt="Success" width={80} height={80} />

        <Title>¡Pago completado!</Title>

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

export default Success;
