const OrderCard = ({ order, onApprove }) => {
  return (
    <div className="card">
      <p>Order ID: {order.id}</p>
      <p>Status: {order.status}</p>
      {onApprove && <button onClick={() => onApprove(order.id)}>Approve</button>}
    </div>
  );
};

export default OrderCard;