import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../../components/Buttons/Button/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { clearAllItems, setDiscount } from "../../redux/slices/cartSlice";

import styles from "./Success.module.scss";

const Success = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(clearAllItems());
    dispatch(setDiscount(0));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.success}>
        <CheckCircleIcon />
        <div className={styles.text}>
          <p>Дякую, ваше замовлення прийняте</p>
          <p>Очікуйте дзвінок менеджера</p>
        </div>

        <Link to="/" className={styles.toMainPage}>
          <Button size="large">
            <span>На головну</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
