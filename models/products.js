// Placeholder for products data
let products = require('../data/fakeProducts'); // Update this with your actual product data

// Function to get all products
const getAllProducts = () => {
  return products;
};

// Function to get a product by ID
const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

// Function to delete a product by ID
const deleteProductById = (id) => {
  products = products.filter((product) => product.id !== id);
};

// Function to add a new product
const addProduct = (product) => {
  products.push(product);
};

module.exports = { getAllProducts, getProductById, deleteProductById, addProduct };
