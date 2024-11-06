
import React from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import './LandingPage.css';

const products = [
  { id: 1, name: 'Sneakers', price: 59.99, image: '/assets/sneakers.jpg' },
  { id: 2, name: 'Jacket', price: 89.99, image: '/assets/jacket.jpg' },
  { id: 3, name: 'Watch', price: 120.00, image: '/assets/watch.jpg' },
];

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <header className="hero">
        <h2>Welcome to Laura's store</h2>
        <p>Your one-stop shop for everything!</p>
      </header>
      <section className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
