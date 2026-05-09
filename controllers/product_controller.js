const Product = require("../models/product");
const { StatusCodes } = require("http-status-codes");

const createProduct = (req, res) => {
  res.send("Create Product");
};

const getAllProducts = (req, res) => {
  res.send("List of products");
};

module.exports = { createProduct, getAllProducts };
