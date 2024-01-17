import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Footer from '../../components/Footer';

import canceledImg from '../../assets/icons/canceled.svg';

import { Container, Content, Title, Description } from './styles';

const Canceled: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Container>
      <Content>
        <img src={canceledImg} alt="Canceled" />

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
