const productModel = require("../models/productModel");

exports.createProduct = async (req, res) => {
  const product = await productModel.createProduct({
    ...req.body,
    farmer_id: req.user.id,
  });

  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  const products = await productModel.getAllProducts();
  res.json(products);
};