import React from 'react';
import productService from '../services/productService';
import { useState, useEffect } from 'react';
import MyCard from './myCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((initialProducts) => {
      setProducts(initialProducts);
      console.log(initialProducts);
    });
  }, []);

  //implement the delete function
  const handleDelete = (id) => {
    productService.remove(id).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  return <div className='product-list'>
    {products.map((product) => (
      <div key={product.id}>
        <MyCard id = {product.id} name = {product.name} description={product.description} price={product.price} imageUrl = {product.imageUrl} handleDelete={handleDelete}/>
      </div>
    ))}
  </div>
};

export default ProductList;