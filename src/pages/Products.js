import React, { useState } from 'react';
import styled from 'styled-components';
import ProductsTable from '../components/Table/ProductsTable';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import ProductsForm from '../components/Forms/ProductsForm';

const Container = styled.div`
  margin-left: 10vw;
  padding: 50px;
  display: grid;
  height: 50px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 35px 25px;
  grid-template-areas:
    '. . . .'
    'table table graph-two graph-two'
    'table table sales-order purchase-order';
  justify-items: center;

  & > Table {
    width: 100%;
    height: 100%;
  }
`;

const PageTitle = styled.h1`
  margin-left: 10vw;
  font-family: Lato;
  font-size: 30px;
  margin-left: 11vw;
  padding-top: 50px;
`;

function Products() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PageTitle className='primary'>Products</PageTitle>
      <Container>
        <div>
          <Button handleClick={() => setIsOpen(true)}>Create Product</Button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <ProductsForm></ProductsForm>
          </Modal>
        </div>

        <ProductsTable className='table' />
      </Container>
    </>
  );
}

export default Products;
