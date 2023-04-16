import styles from './DeliveryInfo.module.scss';

import { ReactComponent as MasterCardLogo } from '../../assets/svg/master-card.svg';
import { ReactComponent as VisaLogo } from '../../assets/svg/visa.svg';

import MapImg from '../../assets/img/map.png';

function DeliveryAndPayment() {
    return (
        <div className={styles.blockContainer}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.logos}>
                        <MasterCardLogo />
                        <VisaLogo />
                    </div>

                    <div className={styles.infoBlock}>
                        <h4>безкоштовна доставка</h4>
                        <p>від 499 грн</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h4>в зеленій зоні</h4>
                        <p>до 29 хвилин</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h4>в жовтій зоні</h4>
                        <p>до 59 хвилин</p>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src={MapImg} alt='map' />
                        <h4>Зона доставки</h4>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DeliveryAndPayment;
