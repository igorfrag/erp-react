import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

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

  const tableData = React.useMemo(
    () => [
      {
        key: 1,
        name: 'Pen',
        price: 22,
        stock: 300,
      },
      {
        key: 2,
        name: 'Pencil',
        price: 22,
        stock: 300,
      },
      {
        key: 3,
        name: 'Notebook',
        price: 22,
        stock: 300,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Code',
        accessor: 'key', // accessor is the "key" in the data
      },
      {
        Header: 'Item',
        accessor: 'name',
      },

      {
        Header: 'Price',
        accessor: 'price',
      },

      {
        Header: 'Stock',
        accessor: 'stock',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      style={{ border: 'solid 1px lavender' }}
      className='table'
      cellSpacing='0'
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 0.5px lavender',
                  background: 'ghostwhite',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      textAlign: 'center',
                      padding: '10px',
                      borderBottom: 'solid 0.5px lavender',
                      background: 'white',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
