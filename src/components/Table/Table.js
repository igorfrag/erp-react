import React, { useState, useEffect } from 'react';
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

function Table() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:3080/products/list`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tableData = data.map((entry) => {
    return (
      <tr key={entry.key}>
        <td>{entry.key}</td>
        <td>{entry.name}</td>
        <td>{entry.price}</td>
      </tr>
    );
  });

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
