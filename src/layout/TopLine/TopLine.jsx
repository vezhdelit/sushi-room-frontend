import styles from './TopLine.module.scss';
import PhoneIcon from '@mui/icons-material/Phone';

function TopHeader() {
    return (
        <div className={styles.topLine}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.location}>
                        <a href='/*'>Ужгород</a>
                    </div>

                    <ul>
                        <li>
                            <a href='/*'>
                                Доставка і оплата
                            </a>
                        </li>
                        <li>
                            <a href='/*'>
                                Про нас
                            </a>
                        </li>
                        <li>
                            <a href='/*'>
                                Відгуки
                            </a>
                        </li>
                        <li>
                            <a href='/*'>
                                Наші ресторани
                            </a>
                        </li>
                        <li>
                            <a href='/*'>
                                Підтримка
                            </a>
                        </li>

                    </ul>

                    <div className={styles.phone}>
                        <PhoneIcon sx={{ fontSize: 18 }} />
                        <a href='tel:+380666719894'>066 671 98 94</a>
                        <p>пн - нд 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;