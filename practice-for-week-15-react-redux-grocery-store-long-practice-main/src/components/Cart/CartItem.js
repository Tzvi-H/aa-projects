import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart";

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input type="number" value={count} onChange={() => 1} />
        <button className="cart-item-button">+</button>
        <button className="cart-item-button">-</button>
        <button onClick={handleRemoveFromCart} className="cart-item-button">
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
