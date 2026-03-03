import { useEffect, useState } from "react";
import api from "../services/api";
import OrderCard from "../components/OrderCard";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/admin/orders").then(res => setOrders(res.data));
  }, []);

  const approveOrder = async (id) => {
    await api.put(`/admin/orders/${id}/approve`);
    alert("Order approved");
  };

  return (
    <div className="container">
      <h2>Pending Orders</h2>
      {orders.map(o => (
        <OrderCard key={o.id} order={o} onApprove={approveOrder} />
      ))}
    </div>
  );
}