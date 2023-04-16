import ContentLoader from 'react-content-loader';

import styles from './Item.module.scss';


function ItemPlaceholder() {
    return (
        <ContentLoader
            className={styles.item}
            speed={2}
            width={295}
            height={330}
            viewBox="0 0 295 330"
            backgroundColor="#DDDDDD"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="330" height="160" />
            <rect x="30" y="185" rx="10" ry="10" width="235" height="65" />
            <rect x="30" y="265" rx="10" ry="10" width="80" height="30" />
            <rect x="150" y="260" rx="24" ry="24" width="115" height="40" />
        </ContentLoader>
    );
}

export default ItemPlaceholder;