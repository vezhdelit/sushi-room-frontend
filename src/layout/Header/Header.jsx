import { Link, useLocation } from 'react-router-dom';


import Search from '../../components/Filter/Search/Search';
import CartButton from '../../components/Buttons/CartButton/CartButton';
import UserButton from '../../components/Buttons/UserButton/UserButton';

import styles from './Header.module.scss';

import { ReactComponent as SushiLogo } from '../../assets/svg/sushi-room.svg';



function Header() {
    const location = useLocation();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/">
                    <div className={styles.logo}>
                        <SushiLogo />
                        <div>
                            <h3>SUSHI ROOM</h3>
                            <p>смачні роли і швидка доставка</p>
                        </div>
                    </div>
                </Link>


                <div className={styles.right}>
                    <div className={styles.search} >
                        {location.pathname === '/' && < Search />}
                    </div>

                    <Link to="/cart">
                        <CartButton />
                    </Link>
                    <UserButton />
                </div>
            </div>
        </div>
    );
}

export default Header;