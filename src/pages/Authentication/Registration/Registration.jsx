import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

import Button from '../../../components/Buttons/Button/Button';

import styles from './Registration.module.scss';
import { fetchRegister, selectIsAuth } from '../../../redux/slices/authSlice';

const Registration = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if (data.payload && 'token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } else {
      alert('Не зареєструватись.', data.payload.msg);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.root}>
      <h2>Реєстрація</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Ім'я Прізвище"
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: "Вкажіть ваше Прізвище та Ім'я" })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Вкажіть email' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Номер телефона"
          error={Boolean(errors.phoneNumber?.message)}
          helperText={errors.phoneNumber?.message}
          {...register('phoneNumber', { required: 'Вкажіть номер телефона' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Вкажіть email' })}
          fullWidth
        />
        <Button type="submit" className={styles.submitButton} disabled={!isValid} size="large">
          Зареєструватись
        </Button>

        <Link to="/login" className={styles.redirect}>
          {' '}
          Вже маєте аккаунт? Авторизуйтесь
        </Link>
      </form>
    </div>
  );
};

export default Registration;
