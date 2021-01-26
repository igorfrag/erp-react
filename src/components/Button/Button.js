import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #03dac6;
  color: white;
  width: 130px;
  margin: auto;
  border: 1px hidden white;
  border-radius: 14px;
  height: 25px;
  :hover {
    background-color: #018786;
  }
`;

const BtnText = styled.span`
  color: #000000;
`;

function Button(props) {
  return (
    <Btn type={props.type || 'submit'} onClick={props.handleClick}>
      <BtnText>{props.children}</BtnText>
    </Btn>
  );
}

export default Button;
