import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories/Categories'
import Sort from './Sort/Sort';
import styles from './Filter.module.scss';

function Filter() {
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <Categories />
                <Sort />
            </div>
        </div>
    )
}

export default Filter