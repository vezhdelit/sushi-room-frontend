import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById } from '../../redux/slices/itemSlice';
import { addItem, removeItem } from '../../redux/slices/cartSlice';

import styles from './ItemInfo.module.scss';

import CircleIcon from '@mui/icons-material/Circle';

import Button from '../../components/Buttons/Button/Button';
import CounterButton from '../../components/Buttons/CounterButton/CounterButton';


const ItemInfo = () => {
    const dispatch = useDispatch();

    const { imageUrl, description, quantity, weight, title, compounds, price, category } = useSelector((state) => state.item.itemById);
    const { _id } = useParams();

    const cartItem = useSelector(state => state.cart.items.find(obj => obj._id === _id));
    const count = cartItem ? cartItem.count : 0;

    const getItemById = async () => {
        dispatch(fetchItemById(_id));
    };

    React.useEffect(() => {
        getItemById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id]);

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
    };

    const onClickRemove = () => {
        dispatch(removeItem(_id));
    };


    return (
        <>
            <div className={styles.container}>
                <div className={styles.breadcrumbs}>
                    <Link to='/' className={styles.grayText}>
                        Головна
                    </Link>
                    <CircleIcon />
                    <Link to='/' className={styles.grayText}>
                        {category}
                    </Link>
                    <CircleIcon />
                    <Link to={`/item/${_id}`} className={styles.title}>
                        {title}
                    </Link>
                </div>

                <div className={styles.content}>
                    <div className={styles.leftBlock}>
                        <img src={`${imageUrl}`} alt="" />
                    </div>
                    <div className={styles.rightBlock}>
                        <div className={styles.itemInfo}>
                            <h4>{quantity} шт / {weight} г</h4>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                        <div className={styles.compounds}>
                            <h4>Склад: </h4>
                            <p>{compounds}</p>
                        </div>
                        <div className={styles.categories}>
                            <h4>Категорії: </h4>
                            <p>{category}</p>
                        </div>
                        <div className={styles.itemBottom}>
                            <div className={styles.price}>{price} ₴</div>
                            {count > 0 ?
                                <CounterButton
                                    onClickRemove={onClickRemove}
                                    onClickAdd={onClickAdd}
                                    size='large'
                                >
                                    {count}
                                </CounterButton>
                                :
                                <Button
                                    onClick={onClickAdd}
                                    size='large'
                                >
                                    В кошик
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ItemInfo;
