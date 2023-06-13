import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./CartItem.module.scss";

import { ReactComponent as MinusButton } from "../../../assets/svg/buttons/minus-button.svg";
import { ReactComponent as PlusButton } from "../../../assets/svg/buttons/plus-button.svg";
import { ReactComponent as ClearButton } from "../../../assets/svg/buttons/clear-button.svg";

import {
  addItem,
  removeItem,
  deleteItem,
} from "../../../redux/slices/cartSlice";

const CartItem = ({ _id, title, quantity, weight, count, price, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeItem(_id));
  };
  const onClickAdd = () => {
    dispatch(
      addItem({
        _id,
      })
    );
  };
  const onClickDelete = () => {
    if (window.confirm("Ви впевнені що хочете видалити товар?")) {
      dispatch(deleteItem(_id));
    }
  };

  return (
    <div className={styles.cartItem}>
      <Link to={`/item/${_id}`}>
        <img src={imageUrl} alt="Item" />
      </Link>
      <div className={styles.itemInfo}>
        <h3>{title}</h3>
        <h4>
          {quantity} шт / {weight} г
        </h4>
      </div>

      <div className={styles.itemRight}>
        <div className={styles.counter}>
          <MinusButton onClick={onClickRemove} />
          <h3>{count}</h3>
          <PlusButton onClick={onClickAdd} />
        </div>

        <div className={styles.price}>{count * price} ₴</div>

        <ClearButton onClick={onClickDelete} />
      </div>
    </div>
  );
};

export default CartItem;
