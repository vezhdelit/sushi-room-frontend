import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import { ReactComponent as SushiLogo } from '../../assets/svg/sushi-room.svg';
import { ReactComponent as UAHIcon } from '../../assets/svg/uah.svg';
import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg';

import Search from '../../components/Filter/Search/Search';
import UserButton from '../../components/Buttons/UserButton/UserButton';


function Header() {
    const { totalPrice, totalCount } = useSelector(state => state.cart);

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
                    <Search />
                    <Link to="/cart" className={styles.cartButton}>
                        <span>{totalPrice}</span>
                        <UAHIcon className={styles.uah} />
                        <div className={styles.delimiter}></div>
                        <CartIcon className={styles.cart} />
                        <span>{totalCount}</span>
                    </Link>
                    <UserButton />
                </div>
            </div>
        </div>
    );
}

export default Header;