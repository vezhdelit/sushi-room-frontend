import React from "react";
import { Navigate, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";

import Button from "../../../components/Buttons/Button/Button";

import styles from "./Login.module.scss";
import { fetchLogin, selectIsAuth } from "../../../redux/slices/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange'
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchLogin(values));
        if (data.payload && 'token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        } else {
            alert('Не вдалось ввійти в аккаунт');
        }
    }

    if (isAuth) {
        return <Navigate to='/' />;
    }

    return (
        <div className={styles.root}>
            <h2>Вхід в аккаунт</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={styles.field}
                    label="E-Mail"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    type='email'
                    {...register('email', { required: 'Вкажіть email' })}
                    fullWidth
                />
                <TextField
                    className={styles.field}
                    label="Пароль"
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register('password', { required: 'Вкажіть email' })}
                    fullWidth />
                <Button type='submit' className={styles.submitButton} disabled={!isValid} size='large'>
                    Ввійти
                </Button>

                <Link to='/registration' className={styles.redirect}> Ще не маєте аккаунт? Зареєструйтесь</Link>
            </form>
        </div>
    );
};

export default Login;