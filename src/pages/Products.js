import React from 'react';
import { Link } from 'react-router-dom';
import productImage1 from '../img/img1.jpg';
import productImage2 from '../img/img2.jpg';
import productImage3 from '../img/img3.jpg';
import productImage4 from '../img/img4.jpg';

const products = [
  { id: 1, name: 'Mascarilla KABA', price: 39.999, imageUrl: productImage1 },
  { id: 2, name: 'Shampoo con cebolla KABA', price: 45.999, imageUrl: productImage2 },
  { id: 3, name: 'Tratamiento capilar KABA', price: 44.999, imageUrl: productImage3 },
  { id: 4, name: 'Revitalizante KABA', price: 43.999, imageUrl: productImage4 },
];

const Products = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <Link to={`/products?id=${product.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
