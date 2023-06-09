import { Link } from 'react-router-dom';

import { ReactComponent as EditIcon } from '../../../assets/svg/edit.svg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from './AdminItem.module.scss';



function AdminItem({ _id, title, quantity, weight, price, imageUrl, compounds }) {
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
                <Link to={`/item/${_id}`}>
                    <EditIcon className={styles.edit}/>
                </Link>

                <DeleteForeverIcon className={styles.delete}/>
            </div>
        </div>
    );
}

export default AdminItem;