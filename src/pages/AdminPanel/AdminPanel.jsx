import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AdminItem from '../../components/Items/AdminItem/AdminItem';
import AdminItemPlaceholder from '../../components/Items/AdminItem/AdminItemPlaceholder';

import styles from './AdminPanel.module.scss';
import { fetchItems } from '../../redux/slices/itemSlice';

const AdminPanel = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.item);
    const searchValue = useSelector((state) => state.filter.searchValue);


    const getItems = async () => {
        const category = '';
        const order = '&order=-1';
        const sort = '&sortBy=updatedAt';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(fetchItems({ category, order, sort, search }));
    };

    React.useEffect(() => {
        getItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const renderedItems = items.map((obj) => <AdminItem key={obj._id} {...obj} />);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Адмін панель</h2>
            <div className={styles.items}>
                <Link>
                    <AdminItemPlaceholder/>
                </Link>
                {renderedItems}
            </div>
        </div>
    );
};

export default AdminPanel;
  