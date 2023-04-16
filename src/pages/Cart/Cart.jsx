import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllItems } from '../../redux/slices/cartSlice';

import Button from '../../components/Buttons/Button/Button';

import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg';
import EmptyCartImg from '../../assets/img/empty-cart.png';
import TrashIcon from '@mui/icons-material/DeleteOutline';

import styles from './Cart.module.scss';

import CartItem from '../../components/Items/CartItem/CartItem';

function Cart() {
    const dispatch = useDispatch();
    const { items, totalPrice } = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, obj) => {
        return obj.count + sum;
    }, 0);

    const onClickClearAll = () => {
        if (window.confirm('Ви впевнені що хочете очистити кошик?')) {
            dispatch(clearAllItems());
        }
    }

    return (
        <div className={styles.container}>
            {
                !totalCount &&
                <div className={styles.cartEmpty}>
                    <img src={EmptyCartImg} alt='empty-cart' />
                    <h5>Кошик порожній, оберіть собі щось з головної</h5>
                    <Link to='/'>
                        <Button size='large'>На головну</Button>
                    </Link>
                </div>
            }

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
                    {
                        items.map(item => (
                            <CartItem
                                key={item._id}
                                {...item}
                            />
                        )
                        )
                    }
                </div>
                <div className={styles.bottomBlock}>
                    <h4>Кількість: {totalCount} шт</h4>
                    <h4 className={styles.sum}>Сума замовлення: {totalPrice} грн</h4>
                </div>
            </div>

            <div className={styles.checkout}>

            </div>

        </div >
    );
};

export default Cart;