import React, { type ButtonHTMLAttributes } from 'react';
import { FiLoader } from 'react-icons/fi';

import { Container, Loading } from '../styles/components/Button';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<IButtonProps> = ({ isLoading, children, ...rest }) => (
  <Container type="button" {...rest} $isLoading={isLoading}>
    {isLoading ? (
      <Loading>
        <FiLoader size={22} color="#fff" />
      </Loading>
    ) : (
      children
    )}
  </Container>
);

export default Button;
