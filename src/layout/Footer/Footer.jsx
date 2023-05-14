import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.column}>
            <h4>SUSHI ROOM</h4>
            <a href="#">Акції</a>
            <a href="#">Про компанію</a>
          </div>

          <div className={styles.column}>
            <h4>Програмний код</h4>
            <a href="https://github.com/vezhdelit/sushi-room-frontend.git">Фронтенд</a>
            <a href="https://github.com/vezhdelit/sushi-room-backend.git">Бекенд</a>
          </div>

          <div className={styles.column}>
            <h4>Підтримка</h4>
            <a href="tel:+380666719894">066 671 98 94</a>
            <a href="mailto:sushiroom@gmail.com">sushiroom@gmail.com</a>
          </div>

          <div className={styles.column}>
            <h4>Адреса доставки</h4>
            <a href="#">Студентська набережна, 2, Ужгород</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p> © Sushi Room, 2023</p>
          <p> Розробник Веждел Василь, 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
