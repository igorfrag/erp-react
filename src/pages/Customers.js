import React, { useState } from 'react';
import './pages.css';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import CustomerForm from '../components/Forms/CustomerForm';
import CustomersTable from '../components/Table/CustomersTable';

function Customers() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='container'>
      Customers
      <div>
        <Button handleClick={() => setIsOpen(true)}>New Customer</Button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <CustomerForm></CustomerForm>
        </Modal>
      </div>
      <CustomersTable />
    </div>
  );
}

export default Customers;
