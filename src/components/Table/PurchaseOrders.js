import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const TableTitle = styled.h2`
  padding: 10px 10px 10px 20px;
  border-bottom: 1px solid lavender;
`;

const TableContainer = styled.div`
  border: 1px solid lavender;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex=start;
`;

function PurchaseOrders() {
  // const [data, setData] = useState([]);

  // const fetchData = () => {
  //   fetch(`http://localhost:3080/sales`)
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const data = React.useMemo(
    () => [
      {
        orderID: 'OR001',
        col2: 'Lorem',
        orderTotal: 550,
      },
      {
        orderID: 'OR002',
        col2: 'Ipsum',
        orderTotal: 400,
      },
      {
        orderID: 'OR003',
        col2: 'Dolor ',
        orderTotal: 600,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Order ID',
        accessor: 'orderID', // accessor is the "key" in the data
      },
      {
        Header: 'Amount',
        accessor: 'orderTotal',
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
  const firstPageRows = rows.slice(0, 20);

  return (
    <TableContainer>
      <TableTitle>Purchase Orders</TableTitle>
      <table {...getTableProps()} className='table' cellSpacing='0'>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
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
          {firstPageRows.map((row) => {
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
                        borderTop: 'solid 0.5px lavender',
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
    </TableContainer>
  );
}

export default PurchaseOrders;
