import { useState } from "react";
import api from "../services/api";

export default function FarmerDashboard() {
  const [product, setProduct] = useState({ name: "", description: "", price: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/products", product);
    alert("Product listed!");
  };

  return (
    <div className="container">
      <h2>List Product</h2>
      <form onSubmit={handleSubmit} className="form">
        <input placeholder="Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} />
        <input placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} />
        <input placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        <button>Add Product</button>
      </form>
    </div>
  );
}