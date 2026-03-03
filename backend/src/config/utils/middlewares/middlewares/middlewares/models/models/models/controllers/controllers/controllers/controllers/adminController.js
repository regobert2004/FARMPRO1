const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");

exports.getUnverifiedFarmers = async (req, res) => {
  const farmers = await userModel.getUnverifiedFarmers();
  res.json(farmers);
};

exports.verifyFarmer = async (req, res) => {
  const farmer = await userModel.verifyFarmer(req.params.id);
  res.json(farmer);
};

exports.getOrders = async (req, res) => {
  const orders = await orderModel.getAllOrders();
  res.json(orders);
};

exports.updateOrderStatus = async (req, res) => {
  const order = await orderModel.updateOrderStatus(
    req.params.id,
    req.body.status
  );
  res.json(order);
};