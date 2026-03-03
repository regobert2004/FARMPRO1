import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

export default function BuyerDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  const orderProduct = async (id) => {
    await api.post("/orders", { productId: id, quantity: 1 });
    alert("Order placed!");
  };

  return (
    <div className="container">
      <h2>Available Products</h2>
      {products.map(p => (
        <ProductCard key={p.id} product={p} onOrder={orderProduct} />
      ))}
    </div>
  );
}