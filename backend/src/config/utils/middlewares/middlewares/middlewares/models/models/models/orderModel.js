const pool = require("../config/db");

exports.createOrder = async (data) => {
  const { buyer_id, product_id, quantity, total_price } = data;

  const result = await pool.query(
    `INSERT INTO orders (buyer_id, product_id, quantity, total_price)
     VALUES ($1,$2,$3,$4) RETURNING *`,
    [buyer_id, product_id, quantity, total_price]
  );

  return result.rows[0];
};

exports.getAllOrders = async () => {
  const result = await pool.query("SELECT * FROM orders");
  return result.rows;
};

exports.updateOrderStatus = async (id, status) => {
  const result = await pool.query(
    "UPDATE orders SET status=$1 WHERE id=$2 RETURNING *",
    [status, id]
  );
  return result.rows[0];
};