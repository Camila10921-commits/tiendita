import React from 'react';
import { useLocation } from 'react-router-dom';
import productImage1 from '../img/img1.jpg';
import productImage2 from '../img/img2.jpg';
import productImage3 from '../img/img3.jpg';
import productImage4 from '../img/img4.jpg';

const products = [
  { id: 1, name: 'Mascarilla KABA', price: 39.999, imageUrl: productImage1 },
  { id: 2, name: 'Shampoo con cebolla KABA', price: 45.000, imageUrl: productImage2 },
  { id: 3, name: 'Tratamiento capilar KABA', price: 44.000, imageUrl: productImage3 },
  { id: 4, name: 'Revitalizante KABA', price: 43.000, imageUrl: productImage3 },
];

const ProductDetails = () => {
  const query = new URLSearchParams(useLocation().search);
  const productId = query.get('id');
  const product = products.find(p => p.id === parseInt(productId));

  return (
    <div>
      <h1>Detalles del Producto</h1>
      {product ? (
        <>
          <img src={product.imageUrl} alt={product.name} style={{ width: '150px', borderRadius: '5px' }} />
          <p>ID: {product.id}</p>
          <p>Nombre: {product.name}</p>
          <p>Precio: ${product.price}</p>
        </>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ProductDetails;
