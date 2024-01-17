import React, { type ButtonHTMLAttributes } from 'react';
import { FiInfo, FiChevronDown } from 'react-icons/fi';

import { Container, Title, Info, SelectContent } from './styles';

interface ISelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  label: string;
}

const Select: React.FC<ISelectProps> = ({ name, label, children, ...rest }) => {
  return (
    <Container>
      <Title>
        {label}

        <Info>
          <FiInfo size={14} color="#647184" />
          <span>criptomoneda</span>
        </Info>
      </Title>

      <SelectContent>
        <button type="button" {...rest}>
          {children}
        </button>
        <FiChevronDown size={16} color="#647184" />
      </SelectContent>
    </Container>
  );
};

export default Select;
