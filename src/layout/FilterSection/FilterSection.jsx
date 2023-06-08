import { useDispatch, useSelector } from 'react-redux';

import Categories from '../../components/Filters/Categories/Categories'
import Sort from '../../components/Filters/Sort/Sort';
import styles from './FilterSection.module.scss';

function FilterSection() {
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <Categories />
                <Sort />
            </div>
        </div>
    )
}

export default FilterSection;