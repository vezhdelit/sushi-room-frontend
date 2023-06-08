import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType, setSortOrder } from '../../../redux/slices/filterSlice';

import styles from './Sort.module.scss';
import ArrowIcon from '@mui/icons-material/ArrowDropUp';

const orders = [
    { name: 'за зростанням', orderProperty: 1 },
    { name: 'за спаданням', orderProperty: -1 },
];
const types = [
    { name: 'популярністю', sortProperty: 'rating' },
    { name: 'ціною', sortProperty: 'price' },
    { name: 'алфавітом', sortProperty: 'title' },
];

function Sort() {
    const dispatch = useDispatch();
    const sortOrder = useSelector((state) => state.filter.sortOrder);
    const sortType = useSelector((state) => state.filter.sortType);
    const sortRef = React.useRef();

    const [isVisiblePopUp, setIsVisiblePopUp] = React.useState(false);


    const onSelectOrder = (obj) => {
        dispatch(setSortOrder(obj));
        setIsVisiblePopUp(false);
    };

    const onSelectType = (obj) => {
        dispatch(setSortType(obj));
        setIsVisiblePopUp(false);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.composedPath().includes(sortRef.current)) {
                setIsVisiblePopUp(false);
            }
        };
        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, [])

    return (
        <div ref={sortRef} className={styles.sort}>
            <div className={styles.label}>
                <ArrowIcon className={isVisiblePopUp ? styles.arrow : ''} />
                <h3>Сортувати за:</h3>
                <span onClick={() => setIsVisiblePopUp(!isVisiblePopUp)}>{sortType.name}</span>
            </div>
            {isVisiblePopUp && (
                <div className={styles.popup}>
                    <ul>
                        {orders.map((obj, index) => (
                            <li
                                key={index}
                                onClick={() => onSelectOrder(obj)}
                                className={sortOrder.orderProperty === obj.orderProperty ? styles.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.delimeter}></ul>
                    <ul>
                        {types.map((obj, index) => (
                            <li
                                key={index}
                                onClick={() => onSelectType(obj)}
                                className={sortType.sortProperty === obj.sortProperty ? styles.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sort;