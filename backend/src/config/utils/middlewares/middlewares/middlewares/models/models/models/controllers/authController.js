const userModel = require("../models/userModel");
const { hashPassword, comparePassword, generateToken } = require("../utils/helpers");

exports.signup = async (req, res) => {
  const { full_name, phone, password, role, location, farm_type } = req.body;

  const existing = await userModel.getUserByPhone(phone);
  if (existing) return res.status(400).json({ message: "User already exists" });

  const password_hash = await hashPassword(password);

  const user = await userModel.createUser({
    full_name,
    phone,
    password_hash,
    role,
    location,
    farm_type,
  });

  res.status(201).json({ message: "User created", user });
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;

  const user = await userModel.getUserByPhone(phone);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const valid = await comparePassword(password, user.password_hash);
  if (!valid) return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken(user);

  res.json({ token, user });
};