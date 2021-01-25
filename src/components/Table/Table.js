import React from 'react';
import styled from 'styled-components';

let TableContainer = styled.table`
  border: 1px solid black;
  text-align: center;

  &.table {
    grid-area: table;
  }

  & th {
    border: 1px solid black;
    text-align: center;
  }
`;

const data = [
  {
    code: 1,
    name: 'Pen',
    price: 2.99,
    stock: 300,
  },
  {
    code: 2,
    name: 'Pencil',
    price: 1.99,
    stock: 285,
  },
];

const tableData = data.map((entry) => {
  return (
    <tr key={entry.code}>
      <td>{entry.code}</td>
      <td>{entry.name}</td>
      <td>{entry.price}</td>
      <td>{entry.stock}</td>
    </tr>
  );
});

function Table() {
  return (
    <TableContainer className='table'>
      <thead>
        <tr>
          <th>Code</th>
          <th>Item</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </TableContainer>
  );
}

export default Table;
