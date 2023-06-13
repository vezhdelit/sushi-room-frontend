import { Link } from "react-router-dom";

import NotFoundImg from "../../assets/img/not-found.png";
import Button from "../../components/Buttons/Button/Button";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        <img src={NotFoundImg} alt="" />
        <p>Сторінку не знайдено, або ще не створена</p>

        <Link to="/" className={styles.toMainPage}>
          <Button size="large">
            <span>На головну</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
