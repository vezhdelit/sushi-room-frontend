import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

import Button from '../../components/Buttons/Button/Button';

import styles from './AddItemPage.module.scss';
import { addItem } from '../../redux/slices/itemSlice';

const AddItemPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      imageUrl:'',
      title: '',
      price: '',
      quantity: '',
      weight: '',
      description: '',
      compounds: '',
      category: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(addItem(values));
    if (data.payload) {
      alert('Товар додано');
    } else {
      alert('Не вдалось зареєструватись.');
    }
  };


  return (
    <div className={styles.root}>
      <h2>Додати новий товар</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Адреса картинки"
          error={Boolean(errors.imageUrl?.message)}
          helperText={errors.imageUrl?.message}
          {...register('imageUrl', { required: "Вкажіть адресу товару" })}
          sx={{ m: 1, width: '62ch' }}
        />

        <TextField
          className={styles.field}
          label="Назва товару"
          error={Boolean(errors.title?.message)}
          helperText={errors.title?.message}
          {...register('title', { required: "Вкажіть назву товару" })}
          sx={{ m: 1, width: '38ch' }}
        />
        <TextField
          className={styles.field}
          label="Категорія"
          error={Boolean(errors.category?.message)}
          helperText={errors.category?.message}
          {...register('category', { required: 'Вкажіть категорію товару' })}
          sx={{ m: 1, width: '22ch' }}
        />
        
        <TextField
          className={styles.field}
          label="Ціна товару (грн)"
          error={Boolean(errors.price?.message)}
          helperText={errors.price?.message}
          type='number'
          InputProps={{ inputProps: { min: 0} }}
          {...register('price', { required: 'Вкажіть ціну товару в грн' })}
          sx={{ m: 1, width: '22ch' }}
        />
        <TextField
          className={styles.field}
          label="Кількість товару (шт.)"
          error={Boolean(errors.quantity?.message)}
          helperText={errors.quantity?.message}
          type='number'
          InputProps={{ inputProps: { min: 0} }}
          {...register('quantity', { required: 'Вкажіть кількість товару в шт' })}
          sx={{ m: 1, width: '18ch' }}
        />
        <TextField
          className={styles.field}
          label="Вага товару (гр.)"
          error={Boolean(errors.weight?.message)}
          helperText={errors.weight?.message}
          type='number'
          InputProps={{ inputProps: { min: 0} }}
          {...register('weight', { required: 'Вкажіть вагу товару в грамах' })}
          sx={{ m: 1, width: '18ch' }}
        />

        <TextField
          multiline
          rows={5}
          className={styles.field}
          label="Опис товару"
          error={Boolean(errors.description?.message)}
          helperText={errors.description?.message}
          {...register('description', { required: 'Опишіть товар' })}
          sx={{ m: 1, width: '62ch' }}
        />
        <TextField
          multiline
          rows={2}
          className={styles.field}
          label="Склад"
          error={Boolean(errors.compounds?.message)}
          helperText={errors.compounds?.message}
          {...register('compounds', { required: 'Вкажіть всі складові товару' })}
          sx={{ m: 1, width: '62ch' }}
        />


        <Button type="submit" className={styles.submitButton} disabled={!isValid} size="large">
          Додати товар
        </Button>

        <Link to="/adminpanel" className={styles.redirect}>
          {' '}
          Повернутись назад
        </Link>
      </form>
    </div>
  );
};

export default AddItemPage;
