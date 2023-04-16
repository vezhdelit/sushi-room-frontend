import styles from './Button.module.scss';

function Button({ className, onClick, children, size, disabled }) {
    return (
        <>
            {
                disabled ?
                    <button className={`${styles.disabled} ${className} ${size === 'large' && styles.large}`}>
                        {children}
                    </button>
                    :
                    <button onClick={onClick} className={`${styles.button} ${className} ${size === 'large' && styles.large}`}>
                        {children}
                    </button>
            }
        </>
    );
}

export default Button;