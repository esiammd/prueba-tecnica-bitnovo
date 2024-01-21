import React, { type ButtonHTMLAttributes } from 'react';
import Image from 'next/image';

import { Container } from '../styles/components/ButtonCopy';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonCopy: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {<Image src="/icons/copy.svg" alt="copiar" width={18} height={18} />}
  </Container>
);

export default ButtonCopy;
