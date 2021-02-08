import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductItem = styled.li`
  padding: 10px;
`;

const ProductUl = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  display: flex;
`;

function ProductCardList() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:3080/products/list`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    fetchData();
  }, []);

  let formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });

  const productList = data.map((product) => {
    return (
      <ProductItem>
        <ProductCard
          name={product.name}
          price={formatter.format(product.price)}
          stock={product.stock}
        ></ProductCard>
      </ProductItem>
    );
  });

  return <ProductUl>{productList}</ProductUl>;
}

export default ProductCardList;
