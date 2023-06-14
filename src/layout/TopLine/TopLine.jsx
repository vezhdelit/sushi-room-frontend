import { Link } from "react-router-dom";

import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./TopLine.module.scss";

const TopHeader = () => {
  return (
    <div className={styles.topLine}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Link to="/map" className={styles.location}>
            Ужгород
          </Link>

          <ul>
            <li>
              <a href="/*">Доставка і оплата</a>
            </li>
            <li>
              <a href="/*">Про нас</a>
            </li>
            <li>
              <a href="/*">Відгуки</a>
            </li>
            <li>
              <a href="/*">Підтримка</a>
            </li>
            <li>
              <Link to="/admin">Адмін панель</Link>
            </li>
          </ul>

          <div className={styles.phone}>
            <PhoneIcon sx={{ fontSize: 18 }} />
            <a href="tel:+380666719894">066 671 98 94</a>
            <p>пн - нд 9:00 - 21:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
