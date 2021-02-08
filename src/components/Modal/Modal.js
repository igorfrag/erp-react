import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 50px;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContainer>
        <button onClick={onClose}>X</button>
        {children}
      </ModalContainer>
    </>,
    document.getElementById('portal')
  );
}
