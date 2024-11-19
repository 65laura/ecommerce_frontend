import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import sneakers from '../assets/sneakers.jpg';
import jacket from '../assets/jacket.jpg';
import watch from '../assets/watch.jpg';
import defaultImage from '../assets/placeholder.png';
import './LandingPage.css';

const productImageMap = {
  Sneakers: sneakers,
  Jacket: jacket,
  Watch: watch,
};

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8081/onlineShopping/public/product/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        const updatedProducts = data.content.map((product) => ({
          ...product,
          image: productImageMap[product.name] || defaultImage, // Assign image based on name
        }));
        setProducts(updatedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
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