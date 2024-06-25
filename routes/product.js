const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

// Middleware for checking authentication
function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json('User NOT Authorized!');
}

// Get/read products
router.get('/', checkAuthentication, (req, res) => {
  Product.find({ userId: req.user._id })
    .then(products => res.json(products))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// Add product
router.post('/add', checkAuthentication, (req, res) => {
  const { name, qty, um, price, weight, description } = req.body;
  const userId = req.user._id;

  const newProduct = new Product({
    name,
    qty: Number(qty),
    um,
    price: Number(price),
    weight: Number(weight),
    description,
    userId
  });

  newProduct.save()
    .then(product => res.json(product))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// Get a product by its ID
router.get('/:id', checkAuthentication, (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.status(401).json('User NOT Authorized!');
      }
      res.json(product);
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// Update a product by its ID
router.post('/update/:id', checkAuthentication, (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.status(401).json('User NOT Authorized!');
      }
      const { name, qty, um, price, weight, description } = req.body;
      product.name = name;
      product.qty = Number(qty);
      product.um = um;
      product.price = Number(price);
      product.weight = Number(weight);
      product.description = description;
      product.date = new Date();
      
      product.save()
        .then(updatedProduct => res.json(updatedProduct))
        .catch(error => res.status(400).json(`Error: ${error}`));
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// Delete a product by its ID
router.delete('/:id', checkAuthentication, (req, res) => {
  Product.findOneAndDelete({ _id: req.params.id, userId: req.user._id })
    .then(product => res.json(product._id))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

module.exports = router;
