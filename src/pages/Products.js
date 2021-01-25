import React from 'react';
import styled from 'styled-components';
import Table from '../components/Table/Table';

const Container = styled.div`
  margin-left: 10vw;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  gap: 35px 25px;
  grid-template-areas:
    '. . . .'
    'table table graph-two graph-two'
    'table table sales-order purchase-order';
`;

const PageTitle = styled.h1`
  margin-left: 10vw;
  font-family: Lato;
  font-size: 30px;
  margin-left: 11vw;
  padding-top: 50px;
`;

function Products() {
  return (
    <>
      <PageTitle className='primary'>Products</PageTitle>
      <Container>
        <Table className='table' />
      </Container>
    </>
  );
}

export default Products;
