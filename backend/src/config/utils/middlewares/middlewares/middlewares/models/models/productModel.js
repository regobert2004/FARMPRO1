const pool = require("../config/db");

exports.createProduct = async (data) => {
  const { farmer_id, name, category, price, unit, quantity } = data;

  const result = await pool.query(
    `INSERT INTO products (farmer_id, name, category, price, unit, quantity)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [farmer_id, name, category, price, unit, quantity]
  );

  return result.rows[0];
};

exports.getAllProducts = async () => {
  const result = await pool.query(
    "SELECT * FROM products WHERE is_active=true"
  );
  return result.rows;
};