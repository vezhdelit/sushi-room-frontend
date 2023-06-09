import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, fetchAuth, deleteAuth } from "../../../redux/slices/authSlice";

import styles from './Profile.module.scss';

import PersonSvg from '@mui/icons-material/PersonOutline';
import EmailSvg from '@mui/icons-material/MailOutline';
import MobileSvg from '@mui/icons-material/Smartphone';
import LockSvg from '@mui/icons-material/LockOutlined';


const Profile = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const user = useSelector((state) => state.auth.data)

    const onDeleteAccount = async() =>{
        if (window.confirm('Ви впевнені що хочете видалити аккаунт?')) {
            await dispatch(deleteAuth());
            await dispatch(fetchAuth());
        }
    }

    if (!isAuth) {
        return <Navigate to='/login' />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* <div className={styles.menu}>

                </div> */}
                <div className={styles.info}>
                    <h2>Профіль</h2>


                    <div className={styles.block}>
                        <PersonSvg />

                        <div>
                            <h3>Ім'я Прізвище</h3>
                            <p>{user.fullName}</p>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <EmailSvg />

                        <div>
                            <h3>Email</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <MobileSvg />

                        <div>
                            <h3>Телефон</h3>
                            <p>{user.phoneNumber}</p>
                        </div>
                    </div>


                    <div className={styles.block}>
                        <LockSvg />

                        <div>
                            <h3>Пароль</h3>
                            <p>* * * * * * * *</p>
                        </div>
                    </div>

                    <button onClick={onDeleteAccount}> Видалити аккаунт</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;