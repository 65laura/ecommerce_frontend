import React from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import sneakers from '../assets/sneakers.jpg';
import jacket from '../assets/jacket.jpg';
import watch from '../assets/watch.jpg';
import './LandingPage.css';

const products = [
  { id: 1, name: 'Sneakers', price: 59.99, image: sneakers },
  { id: 2, name: 'Jacket', price: 89.99, image: jacket },
  { id: 3, name: 'Watch', price: 120.00, image: watch },
];


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <header className="hero">
        <h2>Welcome to Shop Mate</h2>
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
