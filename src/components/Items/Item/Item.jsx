import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItem, removeItem } from '../../../redux/slices/cartSlice';
import { addFavourite, removeFavourite, selectIsAuth } from '../../../redux/slices/authSlice';

import Button from '../../Buttons/Button/Button';
import CounterButton from '../../Buttons/CounterButton/CounterButton';

import { ReactComponent as HeartIcon } from '../../../assets/svg/heart.svg';
import styles from './Item.module.scss';



function Item({ _id, title, quantity, weight, price, imageUrl, compounds }) {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.items.find(obj => obj._id === _id));
    const isAuth = useSelector(selectIsAuth);
    const data = useSelector(state => state.auth.data);

    const count = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            _id,
            title,
            price,
            imageUrl,
            quantity,
            weight,
        };
        dispatch(addItem(item))
    }
    const onClickRemove = () => {
        dispatch(removeItem(_id));
    }
    const onClickHeart = () => {
        if (data && data.favourites.includes(_id)) {
            dispatch(removeFavourite({ _id }));
        }
        else {
            dispatch(addFavourite({ _id }));
        }
    }

    return (
        <div className={styles.item}>
            <Link to={`/item/${_id}`}><img src={imageUrl} alt="Item" /></Link>
            <div className={styles.itemInfo}>
                <div className={styles.upper}>
                    <h4>{quantity} шт / {weight} г</h4>
                    {isAuth &&
                        <HeartIcon onClick={onClickHeart} className={data && data.favourites.includes(_id) ? styles.active : ''} />
                    }
                </div>
                <h3>{title}</h3>
                <p>{compounds}</p>
            </div>
            <div className={styles.itemBottom}>
                <div className={styles.price}>{price} ₴</div>
                {count > 0 ?
                    <CounterButton
                        onClickRemove={onClickRemove}
                        onClickAdd={onClickAdd}
                    >
                        {count}
                    </CounterButton>
                    :
                    <Button onClick={onClickAdd}>В кошик</Button>
                }
            </div>
        </div>
    );
}

export default Item;