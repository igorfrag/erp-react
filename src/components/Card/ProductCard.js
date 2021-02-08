import React from 'react';
import styled from 'styled-components';
import { FiCameraOff } from 'react-icons/fi';

const CardContainer = styled.div`
  border: 1px solid lavender;
  border-radius: 10px;
  background-color: white;
  max-width: 200px;
  max-height: 100px;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const CardValue = styled.h6`
  color: dimgrey;
`;
const CardTitle = styled.h4``;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px;
`;

const CardIcon = styled.div`
  margin-right: auto;
  margin-left: 15px;
  background-color: white;
  border-radius: 10px;
  border: 1px hidden white;

  & > svg {
    width: 50px;
    height: 50px;
    stroke: lavender;
    transform: scale(1);
  }
`;

function ProductCard(props) {
  return (
    <CardContainer>
      <CardIcon>
        <FiCameraOff />
      </CardIcon>
      <CardContent>
        <CardTitle>{props.name}</CardTitle>
        <CardValue>Price: {props.price}</CardValue>
        <CardValue>Stock: {props.stock}</CardValue>
      </CardContent>
    </CardContainer>
  );
}

export default ProductCard;
