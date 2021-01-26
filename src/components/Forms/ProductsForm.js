import React from 'react';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormField = styled.form`
  display: flex;
  flex-direction: column;
  & > label {
    padding: 10px;
    margin: auto;
  }
  & > input {
    margin: 10px;
  }
`;

function ProductsForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:3080/products`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
    });
  };
  return (
    <div>
      <FormField onSubmit={handleSubmit(onSubmit)}>
        <label for='iname'>Item Name:</label>
        <input
          id='iname'
          name='name'
          ref={register({ required: true, maxLength: 20 })}
        />
        <label for='iprice'>Item Price:</label>
        <input id='iprice' name='price' ref={register({ required: true })} />
        <Button type='submit'>Create</Button>
      </FormField>
    </div>
  );
}

export default ProductsForm;
