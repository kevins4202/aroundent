import React from 'react';
import productService from '../services/productService';
import { useState, useEffect } from 'react';
import myCard from './myCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  //implement the get products function
  const fetchProducts = () => {
    const products = productService.getAll();
    setProducts(products);
  };

  //implement the delete function
  const handleDelete = (id) => {
  };

  return <>
  <ul>
    {products.map((product) => (
      <li key={product.id}>
        <Card title = {product.title} description={product.description} price={product.price} imageUrl = {product.imageUrl} />
      </li>
    ))}
  </ul>
  </>
};

export default ProductList;