import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout, selectIsAuth } from "../../../redux/slices/authSlice";

import styles from './UserButton.module.scss';
import { ReactComponent as UserOut } from '../../../assets/svg/user/user-out.svg';
import { ReactComponent as UserIn } from '../../../assets/svg/user/user-in.svg';


function UserPopUpMenu() {
    const dispatch = useDispatch();
    const userButtonRef = React.useRef();

    const isAuth = useSelector(selectIsAuth);
    const [isVisiblePopUp, setIsVisiblePopUp] = React.useState(false);

    const onClickLogout = () => {
        if (window.confirm('Ви впевнені що хочете вийти з аккаунту?')) {
            dispatch(logout())
            window.localStorage.removeItem('token');
        }
    }

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.composedPath().includes(userButtonRef.current)) {
                setIsVisiblePopUp(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, [])


    return (
        <div ref={userButtonRef} className={styles.userButton}>
            {
                isAuth ? (<UserIn onClick={() => setIsVisiblePopUp(!isVisiblePopUp)} />)
                    : (<UserOut onClick={() => setIsVisiblePopUp(!isVisiblePopUp)} />)
            }

            {isVisiblePopUp && (
                <div className={styles.popup}>
                    <ul onClick={() => setIsVisiblePopUp(false)}>
                        {
                            isAuth ?
                                (<>
                                    <Link to='/profile'>
                                        <li>
                                            Профіль
                                        </li>
                                    </Link>
                                    <li onClick={onClickLogout}>
                                        Вийти
                                    </li>
                                </>)
                                :
                                (<>
                                    <Link to='/login'>
                                        <li >
                                            Ввійти
                                        </li>
                                    </Link>
                                    <Link to='/registration'>
                                        <li>
                                            Реєстрація
                                        </li>
                                    </Link>
                                </>)
                        }
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserPopUpMenu;