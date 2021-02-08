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

const FormGroup = styled.h3``;

function CustomerForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:3080/customers`, {
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
        <FormGroup>Customer Data</FormGroup>
        <label for='inputName'>Full Name:</label>
        <input
          name='name'
          id='inputName'
          ref={register({
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <label for='inputEmail'>Email:</label>
        <input
          name='email'
          id='inputEmail'
          ref={register({ required: true, maxLength: 20 })}
          type='email'
        />
        <label for='inputGender'>Gender:</label>
        <select id='inputGender' name='gender'>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Other'>Other</option>
        </select>
        <label for='inputAge'>Age:</label>
        <input
          name='age'
          id='inputAge'
          type='number'
          ref={register({ min: 18, max: 99 })}
        />
        <Button type='submit'>Create</Button>
      </FormField>
    </div>
  );
}

export default CustomerForm;
