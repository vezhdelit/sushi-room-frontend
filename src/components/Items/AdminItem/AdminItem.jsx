import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { deleteItemById, fetchItems, fetchItemById } from '../../../redux/slices/itemSlice';

import { ReactComponent as EditIcon } from '../../../assets/svg/edit.svg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import styles from './AdminItem.module.scss';



function AdminItem({ _id, title, quantity, weight, price, imageUrl, compounds }) {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.filter.searchValue);

    const getItems = async () => {
        const category = '';
        const order = '&order=-1';
        const sort = '&sortBy=updatedAt';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(fetchItems({ category, order, sort, search }));
    };

    const OnDelete = async() =>{
        if (window.confirm('Ви впевнені що хочете видалити товар?')) {
            await dispatch(deleteItemById(_id));
            getItems();
        }
    }

    return (
        <div className={styles.item}>
            <img src={imageUrl} alt="Item" />
            <div className={styles.itemInfo}>
                <h3>{title}</h3>
                <p>{compounds}</p>
            </div>

            <div className={styles.itemBottom}>
                <div className={styles.upper}>
                    <h4>{quantity} шт / {weight} г</h4>
                </div>
                <div className={styles.price}>{price} ₴</div>
            </div>
            <div className={styles.buttons}>
                <Link to={`/adminpanel/edititem/${_id}`}>
                    <EditIcon className={styles.edit}/>
                </Link>

                <DeleteForeverIcon className={styles.delete} onClick={OnDelete}/>
            </div>
        </div>
    );
}

export default AdminItem;