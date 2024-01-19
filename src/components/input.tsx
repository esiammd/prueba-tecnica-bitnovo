import React, {
  type InputHTMLAttributes,
  useState,
  useCallback,
  type LegacyRef,
} from 'react';
import { type IconBaseProps } from 'react-icons';

import { Container, Title, InputContent } from '../styles/components/Input';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
  innerRef: LegacyRef<HTMLInputElement>;
}

const Input: React.FC<IInputProps> = ({
  label,
  icon: Icon,
  innerRef,
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
      <Title>{label}</Title>

      <InputContent $isFocused={isFocused}>
        {Icon && <Icon size={20} color={isFocused ? '#002859' : '#647184'} />}

        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={innerRef}
          {...rest}
        />
      </InputContent>
    </Container>
  );
};

export default Input;
