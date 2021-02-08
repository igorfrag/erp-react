import React, { useState } from 'react';
import './pages.css';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import ProductsForm from '../components/Forms/ProductsForm';
import ProductCardList from '../components/Card/ProductCardList';

function Products() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='container'>
        Products
        <div className='grid-container-products'>
          <div className='ButtonOne'>
            <Button handleClick={() => setIsOpen(true)}>Create Product</Button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <ProductsForm></ProductsForm>
            </Modal>
          </div>
          <div className='ProductCardContainer'>
            <ProductCardList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
