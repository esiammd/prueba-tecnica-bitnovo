import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Footer from '../../components/Footer';

import successImg from '../../assets/icons/success.svg';

import { Container, Content, Title, Description } from './styles';

const Success: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Container>
      <Content>
        <img src={successImg} alt="Success" />

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
