import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const CardContainer = styled.div`
  border: 1px solid lavender;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex=start;
`;

const CardTitle = styled.h2`
  padding: 10px 10px 10px 20px;
  border-bottom: 1px solid lavender;
`;

const myData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
  datasets: [
    {
      label: '# of Sales',
      data: [33, 19, 25, 42, 11, 15],
      pointBackgroundColor: 'rgba(55, 0, 179, 1)',
      backgroundColor: [
        'rgba(55, 0, 179, 0.2)',
        'rgba(55, 0, 179, 0.2)',
        'rgba(55, 0, 179, 0.2)',
        'rgba(55, 0, 179, 0.2)',
        'rgba(55, 0, 179, 0.2)',
        'rgba(55, 0, 179, 0.2)',
      ],
      borderColor: [
        'rgba(55, 0, 179, 1)',
        'rgba(55, 0, 179, 1)',
        'rgba(55, 0, 179, 1)',
        'rgba(55, 0, 179, 1)',
        'rgba(55, 0, 179, 1)',
        'rgba(55, 0, 179, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function ChartCard(props) {
  return (
    <CardContainer>
      <CardTitle>{props.title}</CardTitle>
      <Line data={myData}></Line>
    </CardContainer>
  );
}

export default ChartCard;
