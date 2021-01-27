import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid lavender;
  border-radius: 10px;
  background-color: white;
  max-width: 300px;
  max-height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CardIcon = styled.div`
  margin-right: auto;
  margin-left: 15px;
  background-color: indigo;
  border-radius: 10px;
  border: 1px hidden white;

  & > svg {
    width: 50px;
    height: 50px;
    fill: ${(props) => props.iconFill};
    stroke: ${(props) => props.iconStroke};
    transform: scale(${(props) => props.iconScale || '0.6'});
  }
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
      <CardIcon
        iconScale={props.iconScale}
        iconFill={props.iconFill}
        iconStroke={props.iconStroke}
      >
        {props.icon}
      </CardIcon>
      <CardContent>
        <CardValue>{getValue}</CardValue>
        <CardTitle>{props.title}</CardTitle>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
