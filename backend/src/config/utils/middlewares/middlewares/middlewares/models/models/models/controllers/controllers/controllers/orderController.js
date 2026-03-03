const orderModel = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  const { product_id, quantity, total_price } = req.body;

  const order = await orderModel.createOrder({
    buyer_id: req.user.id,
    product_id,
    quantity,
    total_price,
  });

  res.status(201).json(order);
};