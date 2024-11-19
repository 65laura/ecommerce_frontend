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
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8081/onlineShopping/public/product/all?page=${currentPage}&size=10`)
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        const { content, totalPages } = data; // Destructure data
        setProducts(content);
        setTotalPages(totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [currentPage]); // Fetch products whenever currentPage changes

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

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
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
