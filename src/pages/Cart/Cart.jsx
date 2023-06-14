import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, setDiscount } from "../../redux/slices/cartSlice";

import Button from "../../components/Buttons/Button/Button";
import TextField from "@mui/material/TextField";

import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import EmptyCartImg from "../../assets/img/empty-cart.png";
import TrashIcon from "@mui/icons-material/DeleteOutline";

import styles from "./Cart.module.scss";

import CartItem from "../../components/Items/CartItem/CartItem";

const discounts = [
  { code: "sushiroom10", discount: 0.1 },
  { code: "sushiroom15", discount: 0.15 },
];

const Cart = () => {
  const dispatch = useDispatch();
  const [promo, setPromo] = React.useState("");
  const { items, totalPrice } = useSelector((state) => state.cart);
  const { discount } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);

  const onClickClearAll = () => {
    if (window.confirm("Ви впевнені що хочете очистити кошик?")) {
      dispatch(clearAllItems());
    }
  };

  const onChangeInput = (event) => {
    setPromo(event.target.value);
  };
  const onSetPromo = () => {
    const disc = discounts.find((disc) => disc.code === promo);
    dispatch(setDiscount(disc ? disc.discount : null));
  };

  return (
    <div className={styles.container}>
      {!totalCount ? (
        <div className={styles.cartEmpty}>
          <img src={EmptyCartImg} alt="empty-cart" />
          <h5>Кошик порожній, оберіть собі щось з головної</h5>
          <Link to="/">
            <Button size="large">На головну</Button>
          </Link>
        </div>
      ) : (
        <div className={styles.cart}>
          <div className={styles.leftBlock}>
            <div className={styles.topBlock}>
              <div className={styles.order}>
                <CartIcon />
                <h5>Моє замовлення</h5>
              </div>
              <div onClick={onClickClearAll} className={styles.trash}>
                <TrashIcon />
                <h5>Очистити кошик</h5>
              </div>
            </div>
            <div className={styles.items}>
              {items.map((item) => (
                <CartItem key={item._id} {...item} />
              ))}
            </div>
            <div className={styles.bottomBlock}>
              <h5>Кількість:</h5>
              <h4>{totalCount} шт</h4>
              <div className={styles.sum}>
                <h5>Сума замовлення: </h5>
                <h4>{totalPrice} грн</h4>
              </div>
            </div>
          </div>

          <div className={styles.rightBlock}>
            <div className={styles.promo}>
              <TextField
                variant="standard"
                label="ПРОМОКОД"
                onChange={onChangeInput}
              />
              <Button onClick={onSetPromo}>Застосувати</Button>
            </div>
            <div className={styles.goods}>
              <p>Товари:</p>
              <span>{totalPrice} грн</span>
            </div>
            <div className={styles.discount}>
              <p>Знижка:</p>
              <span>
                {discount * 100}% / {Math.round(totalPrice * discount)} грн
              </span>
            </div>
            <Link to="/map" className={styles.summary}>
              <h3>{totalPrice - Math.round(totalPrice * discount)} грн</h3>
              <Button size="large">Далі</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
