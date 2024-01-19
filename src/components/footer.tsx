import React from 'react';
import Image from 'next/image';

import { Container } from '../styles/components/Footer';

const Footer: React.FC = () => {
  return (
    <Container>
      <Image src="logo.svg" alt="Bitnovo" width={164} height={26} />
      <span>© 2022 Bitnovo. All rights reserved.</span>
    </Container>
  );
};

export default Footer;
