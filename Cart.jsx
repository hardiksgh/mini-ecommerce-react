export default function Cart({ cart, updateQty }) {
  const items = Object.values(cart);
  const totalQty = items.reduce((a, b) => a + b.qty, 0);
  const totalPrice = items.reduce((a, b) => a + b.qty * b.price, 0);

  if (!items.length) return <p>Empty cart</p>;

  return (
    <div className="cart">
      <h3>Cart</h3>

      {items.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => updateQty(item.id, -1)}>-</button>
          {item.qty}
          <button onClick={() => updateQty(item.id, 1)}>+</button>
        </div>
      ))}

      <hr />
      <p>Total Items: {totalQty}</p>
      <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
    </div>
  );
}
