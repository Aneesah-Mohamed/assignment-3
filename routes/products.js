const express = require('express');
const router = express.Router();
const productsModel = require('../models/products');

// GET all products
router.get('/', (req, res) => {
  const allProducts = productsModel.getAllProducts();
  res.json(allProducts);
});

// GET a specific product by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = productsModel.getProductById(id);
  res.json(product);
});

// DELETE a product by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  productsModel.deleteProductById(id);
  res.json({ success: true, message: `Product with ID ${id} has been deleted` });
});

// POST a new product
router.post('/', (req, res) => {
  const newProduct = req.body; // Assuming the request body contains the new product data
  productsModel.addProduct(newProduct);
  res.json(newProduct);
});

module.exports = router;
