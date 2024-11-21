import React, { useState, useEffect } from 'react';
import './ProductPage.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    description: '',
    price: '',
  });
  const [editProductId, setEditProductId] = useState(null); // For updates

  useEffect(() => {
    fetch('http://localhost:8081/onlineShopping/public/product/all?page=0&size=10')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.content || []);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateProduct = () => {
    fetch('http://localhost:8081/onlineShopping/public/product/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Failed to create product');
      })
      .then((newProduct) => {
        setProducts((prev) => [...prev, newProduct]);
        setFormData({ productName: '', productCategory: '', description: '', price: '' });
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateProduct = () => {
    fetch(`http://localhost:8081/onlineShopping/public/product/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        productId: editProductId, // Pass productId as a header
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Failed to update product');
      })
      .then((updatedProduct) => {
        setProducts((prev) =>
          prev.map((product) => (product.productId === editProductId ? updatedProduct : product))
        );
        setEditProductId(null);
        setFormData({ productName: '', productCategory: '', description: '', price: '' });
      })
      .catch((error) => console.error(error));
  };

  const handleEditClick = (product) => {
    setEditProductId(product.productId);
    setFormData({
      productName: product.productName,
      productCategory: product.productCategory,
      description: product.description,
      price: product.price,
    });
  };

  return (
    <div className="product-page">
      <h1>Manage Products</h1>

      <div className="form">
        <h2>{editProductId ? 'Update Product' : 'Create Product'}</h2>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="productCategory"
          placeholder="Category"
          value={formData.productCategory}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button onClick={editProductId ? handleUpdateProduct : handleCreateProduct}>
          {editProductId ? 'Update Product' : 'Create Product'}
        </button>
      </div>

      <h2>Products List</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.productId} className="product-card">
              <h3>{product.productName}</h3>
              <p><strong>Category:</strong> {product.productCategory}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <button onClick={() => handleEditClick(product)}>Edit</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;