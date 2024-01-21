import React, {
  type InputHTMLAttributes,
  useState,
  useCallback,
  type LegacyRef,
} from 'react';
import { FiChevronDown, FiInfo } from 'react-icons/fi';

import {
  Container,
  ContentTitle,
  Title,
  Info,
  InputContent,
  Error,
} from '../styles/components/Select';
import Image from 'next/image';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  image: string;
  error?: string;
  innerRef: LegacyRef<HTMLInputElement>;
}

const Select: React.FC<IInputProps> = ({
  label,
  image,
  error,
  innerRef,
  disabled,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <ContentTitle>
        <Title>{label}</Title>

        <Info>
          <FiInfo size={14} color="#647184" />
          <span>
            Las criptodivisas que se podrán seleccionar varian en función del
            importe a pagar.
          </span>
        </Info>
      </ContentTitle>

      <InputContent
        $isFocused={isFocused}
        $isError={!!error}
        $isDisabled={!!disabled}
      >
        <Image src={image} alt="Icono" width={20} height={20} />

        <input
          {...rest}
          ref={innerRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />

        <FiChevronDown size={16} color="#647184" />
      </InputContent>

      {error && <Error>* {error}</Error>}
    </Container>
  );
};

export default Select;
