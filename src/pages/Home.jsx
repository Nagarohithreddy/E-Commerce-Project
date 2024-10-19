import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Cartslice';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('none');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [addedToCart, setAddedToCart] = useState({}); // State to track added products
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);

        const uniqueCategories = [...new Set(response.data.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    setAddedToCart(prev => ({ ...prev, [product.id]: true })); // Update state to mark as added
  };

  const sortedProducts = [...products]
    .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => selectedCategory ? product.category === selectedCategory : true)
    .sort((a, b) => {
      if (sortOption === 'lowToHigh') return a.price - b.price;
      if (sortOption === 'highToLow') return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <h1 className="heading">Product List</h1>

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px' }}
      />

      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px' }}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select
        onChange={(e) => setSortOption(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px' }}
      >
        <option value="none">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>

      <div className="productsWrapper">
        {sortedProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt="img" />
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button
              className="btn"
              onClick={() => handleAdd(product)}
              disabled={!!addedToCart[product.id]} // Disable button if added to cart
            >
              {addedToCart[product.id] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


