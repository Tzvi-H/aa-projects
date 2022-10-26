import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementCount,
  decrementCount,
  updateCount,
} from "../../store/cart";

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncrementCount = () => {
    dispatch(incrementCount(item.id));
  };

  const handleDecrementCount = () => {
    if (item.count === 1) {
      handleRemoveFromCart();
    } else {
      dispatch(decrementCount(item.id));
    }
  };

  const handleUpdateCount = (e) => {
    const count = e.target.value;
    if (count < 1) {
      handleRemoveFromCart();
    } else {
      dispatch(updateCount({ id: item.id, count }));
    }
  };

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input type="number" value={count} onChange={handleUpdateCount} />
        <button onClick={handleIncrementCount} className="cart-item-button">
          +
        </button>
        <button onClick={handleDecrementCount} className="cart-item-button">
          -
        </button>
        <button onClick={handleRemoveFromCart} className="cart-item-button">
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
