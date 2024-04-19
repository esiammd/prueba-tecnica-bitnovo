import React, { useState, type ButtonHTMLAttributes } from 'react';
import Image from 'next/image';

import { Container } from '../styles/components/ButtonCopy';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonCopy: React.FC<IButtonProps> = ({ children, onClick, ...rest }) => {
  const [recentlyCopied, setRecentlyCopied] = useState(false);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  const localOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setRecentlyCopied(true);
    if (currentTimeout) {
      clearTimeout(currentTimeout);
    }
    setCurrentTimeout(
      setTimeout(() => {
        setRecentlyCopied(false);
      }, 3000),
    );
    onClick && onClick(event);
  };

  return (
    <Container type="button" onClick={localOnClick} {...rest}>
      {recentlyCopied && <span>Copiado</span>}
      {<Image src="/icons/copy.svg" alt="copiar" width={18} height={18} />}
    </Container>
  );
};

export default ButtonCopy;
