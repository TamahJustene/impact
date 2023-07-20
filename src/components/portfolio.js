import React, { useState } from 'react';
import './Portfolio.css';
import app1 from "./assets/app-1.jpg"
import app2 from "./assets/app-2.jpg"
import app3 from "./assets/app-3.jpg"
import product1 from "./assets/product-1.jpg"
import product2 from "./assets/product-2.jpg"
import product3 from "./assets/product-3.jpg"
import branding1 from "./assets/branding-1.jpg"
import branding2 from "./assets/branding-2.jpg"
import branding3 from "./assets/branding-3.jpg"
import book1 from "./assets/books-1.jpg"
import book2 from "./assets/books-2.jpg"
import book3 from "./assets/books-3.jpg"
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 1,
      image: app1,
      name: 'App 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'app',
    },
    {
      id: 2,
      image: product1,
      name: 'Product 1',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      category: 'product',
    },
    {
      id: 3,
      image: branding1,
      name: 'Branding 1',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      category: 'branding',
    },
    {
      id: 4,
      image: book1,
      name: 'Book 1',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      category: 'books',
    },
    {
      id: 5,
      image: app2,
      name: 'App 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'app',
    },
    {
      id: 6,
      image: product2,
      name: 'Product 2',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      category: 'product',
    },
    {
      id: 7,
      image: branding2,
      name: 'Branding 2',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      category: 'branding',
    },
    {
      id: 8,
      image: book2,
      name: 'Book 2',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      category: 'books',
    },




    {
      id: 9,
      image: app3,
      name: 'App 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'app',
    },
    {
      id: 10,
      image: product3,
      name: 'Product 3',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      category: 'product',
    },
    {
      id: 11,
      image: branding3,
      name: 'Branding 3',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      category: 'branding',
    },
    {
      id: 12,
      image: book3,
      name: 'Book 3',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      category: 'books',
    },
  ];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  const filteredProducts = activeFilter === 'all' ? products : products.filter(product => product.category === activeFilter);

  return (
    <div className="portfolio">
      <div className='portfolio-header'>
      <h1>Portfolio</h1>
      <hr></hr>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
      </div>
      <div className="portfolio-navigation">
        <button
          className={`filter-item ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className={`filter-item ${activeFilter === 'app' ? 'active' : ''}`}
          onClick={() => handleFilterChange('app')}
        >
          App
        </button>
        <button
          className={`filter-item ${activeFilter === 'product' ? 'active' : ''}`}
          onClick={() => handleFilterChange('product')}
        >
          Product
        </button>
        <button
          className={`filter-item ${activeFilter === 'branding' ? 'active' : ''}`}
          onClick={() => handleFilterChange('branding')}
        >
          Branding
        </button>
        <button
          className={`filter-item ${activeFilter === 'books' ? 'active' : ''}`}
          onClick={() => handleFilterChange('books')}
        >
          Books
        </button>
      </div>

      <div className="portfolio-items">
        {filteredProducts.map((product) => (
          <div className="portfolio-item" key={product.id}>
            <img src={product.image} alt={`Product ${product.id}`} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
