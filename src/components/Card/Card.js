import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardValue = styled.h2``;
const CardTitle = styled.h6``;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 15px;
`;

function Card(props) {
  let formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });
  let getValue = props.value;
  if (props.isMoney === 'true') {
    getValue = formatter.format(props.value);
  }
  return (
    <CardContainer>
      <CardContent>
        <CardValue>{getValue}</CardValue>
        <CardTitle>{props.title}</CardTitle>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
