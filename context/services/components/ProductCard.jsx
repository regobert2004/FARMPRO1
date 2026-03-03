const ProductCard = ({ product, onOrder }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price} FCFA</p>
      {onOrder && <button onClick={() => onOrder(product.id)}>Order</button>}
    </div>
  );
};

export default ProductCard;