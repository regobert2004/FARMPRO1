const pool = require("../config/db");

exports.createUser = async (data) => {
  const { full_name, phone, password_hash, role, location, farm_type } = data;

  const result = await pool.query(
    `INSERT INTO users (full_name, phone, password_hash, role, location, farm_type)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [full_name, phone, password_hash, role, location, farm_type]
  );

  return result.rows[0];
};

exports.getUserByPhone = async (phone) => {
  const result = await pool.query("SELECT * FROM users WHERE phone=$1", [phone]);
  return result.rows[0];
};

exports.getUnverifiedFarmers = async () => {
  const result = await pool.query(
    "SELECT * FROM users WHERE role='farmer' AND is_verified=false"
  );
  return result.rows;
};

exports.verifyFarmer = async (id) => {
  const result = await pool.query(
    "UPDATE users SET is_verified=true WHERE id=$1 RETURNING *",
    [id]
  );
  return result.rows[0];
};