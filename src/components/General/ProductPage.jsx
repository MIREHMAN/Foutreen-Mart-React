// ProductPage.jsx
import React from 'react';


function ProductPage() {
  return (
    <div className="product-page">
      <div className="filters">
        <h3>Filters</h3>
        <ul>
          <li>
            <label>Price Range:</label>
            <input type="range" min="0" max="1000" />
          </li>
          <li>
            <label>Categories:</label>
            <select>
              <option value="">All</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="products">
        <h3>Products</h3>
        <ul>
          <li>
            <img src="product-image.jpg" alt="Product Image" />
            <h4>Product Name</h4>
            <p>Price: $99.99</p>
            <button>Add to Cart</button>
          </li>
          {/* More products */}
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;