import MinusIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import styles from './CounterButton.module.scss';

function CounterButton({ className, onClickRemove, onClickAdd, children, size }) {
    const fontSize = size === 'large' ? 36 : 28;
    return (
        <button className={`${styles.counterButton} ${className} ${size === 'large' && styles.large}`}>
            <MinusIcon
                onClick={onClickRemove}
                sx={{ fontSize: fontSize }}
            />
            <span>{children}</span>
            <AddIcon
                onClick={onClickAdd}
                sx={{ fontSize: fontSize }}

            />
        </button>
    );
}

export default CounterButton;