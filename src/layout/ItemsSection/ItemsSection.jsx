import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ItemsSection.module.scss';

import Item from '../../components/Items/Item/Item';
import ItemPlaceholder from '../../components/Items/Item/ItemPlaceholder';

import { fetchItems } from '../../redux/slices/itemSlice';

function ItemsSection() {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.item);

    const data = useSelector(state => state.auth.data);

    const showOnlyFavourites = useSelector(state => state.filter.showOnlyFavourites)
    const categoryType = useSelector((state) => state.filter.category);
    const sortOrder = useSelector((state) => state.filter.sortOrder);
    const sortType = useSelector((state) => state.filter.sortType);
    const searchValue = useSelector((state) => state.filter.searchValue);

    const getItems = async () => {
        const category = (categoryType && categoryType !== 'Всі') ? `&category=${categoryType}` : '';
        const order = `&order=${sortOrder.orderProperty}`;
        const sort = `&sortBy=${sortType.sortProperty}`;
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(fetchItems({ category, order, sort, search }));
    };

    React.useEffect(() => {
        getItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryType, sortOrder, sortType, searchValue]);

    const placeholders = [...new Array(6)].map((_, index) => <ItemPlaceholder key={index} />);
    const renderedItems = items.map((obj) => (!showOnlyFavourites || (data && data.favourites.includes(obj._id))) && (<Item key={obj._id} {...obj} />));

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{showOnlyFavourites ? 'Тільки улюблені' : 'Всі позиції'}</h2>
            {status === 'error' ?
                (<div>
                    <div className={styles.itemsError}>
                        <h2>Відбулась помилка 😕</h2>
                        <p>На жаль, не вдалось завантажити позиції.</p>
                        <p>Спробуйте, будь ласка, пізніше.</p>
                    </div>
                </div>)
                :
                (<div className={styles.items}>
                    {status === 'pending' ? placeholders : renderedItems}
                </div>)
            }
        </div>
    );
}

export default ItemsSection;
