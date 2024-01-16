import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '@unform/web';
import { type FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import maskAmount from '../../utils/maskAmount';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import { Container, Title } from './styles';

interface IFormData {
  amount: string;
  coin: string;
  description: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          amount: Yup.string().required(),
          coin: Yup.string().required(),
          description: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        navigate('/checkout');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [navigate],
  );

  const handleChangeForm = useCallback((): void => {
    const formData = (formRef.current?.getData() ?? {}) as IFormData;
    const formDataFormatted = {
      ...formData,
      amount: maskAmount(formData.amount),
    };

    formRef.current?.setData(formDataFormatted);

    setIsFormCompleted(
      !!formDataFormatted.amount &&
        !!formDataFormatted.coin &&
        !!formDataFormatted.description,
    );
  }, []);

  return (
    <Container>
      <Form
        ref={formRef}
        onSubmit={handleSubmitForm}
        onChange={handleChangeForm}
      >
        <Title>Crear pago</Title>

        <Input
          name="amount"
          label="Importe a pagar"
          placeholder="Añade importe a pagar"
        />

        <Input name="coin" label="Seleccionar moneda" />

        <Input
          name="description"
          label="Concepto"
          placeholder="Añade descripción del pago"
        />

        <Button type="submit" disabled={!isFormCompleted}>
          Continuar
        </Button>
      </Form>

      <Footer />
    </Container>
  );
};

export default Home;
