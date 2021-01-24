import React from 'react';
import './Card.css';
import { BiBarChartAlt } from 'react-icons/bi';

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
    <div className='card-container'>
      <BiBarChartAlt className='card-icon' />
      <div className='card-content'>
        <h2>{getValue}</h2>
        <h6>{props.title}</h6>
      </div>
    </div>
  );
}

export default Card;
