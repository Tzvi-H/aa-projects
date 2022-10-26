import { addToCart } from "../../store/cart";
import { likeProduce } from "../../store/produce";
import { useDispatch } from "react-redux";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();

  const cartItem = {};

  const handleAddToCart = () => {
    dispatch(addToCart(produce.id));
  };

  const handleLikeProduce = () => {
    dispatch(likeProduce(produce.id));
  };

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          onClick={handleLikeProduce}
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          onClick={handleAddToCart}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
