import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import leatherBoots from '../assets/leatherBoots.png';
import ergonomicOfficeChair from '../assets/ergonomicOfficeChair.png';
import petChewToy from '../assets/petChewToy.png';
import yogaMat from '../assets/yogaMat.png';
import './LandingPage.css';

const productImageMap = {
  LeatherBoots: leatherBoots ,
  ErgonomicOfficeChair: ergonomicOfficeChair,
  PetChewToy :petChewToy
  YogaMat.png :yogaMat


};

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8081/onlineShopping/public/product/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
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
