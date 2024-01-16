import React from 'react';

import footerImg from '../../assets/footer.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={footerImg} alt="Bitnovo" />
    </Container>
  );
};

export default Footer;
