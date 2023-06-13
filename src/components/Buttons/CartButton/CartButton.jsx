import { useSelector } from "react-redux";

import { ReactComponent as UAHIcon } from "../../../assets/svg/uah.svg";
import { ReactComponent as CartIcon } from "../../../assets/svg/cart.svg";

import styles from "./CartButton.module.scss";

const CartButton = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  return (
    <button className={styles.cartButton}>
      <span>{totalPrice}</span>
      <UAHIcon className={styles.uah} />
      <div className={styles.delimiter}></div>
      <CartIcon className={styles.cart} />
      <span>{totalCount}</span>
    </button>
  );
};

export default CartButton;
