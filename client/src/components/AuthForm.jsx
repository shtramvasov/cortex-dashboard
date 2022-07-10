import React from 'react';
import { useForm } from 'react-hook-form';

function AuthForm({ method, formSubmit, buttonText = 'Отправить' }) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	return (
		<form
			className='loginpage__form'
			method={method}
			onSubmit={handleSubmit(formSubmit)}>
      <input
        placeholder='Пользователь'
        className='input__user'
        {...register('username', { 
          required: 'Введите имя пользователя',
          maxLength: {
            value: 12,
            message: 'Имя пользователя не больше 12 символов'
          }
         })}
      />
      {errors?.username && (
        <p className='description error'>
          {errors?.username?.message || 'Ошибка заполнения'}
        </p>
      )}
      <input
        type='password'
        placeholder='Пароль'
        className='input__password'
        {...register('password', {
          required: 'Введите пароль',
          minLength: {
            value: 4,
            message: 'Пароль как минимум 4 символа',
          },
          maxLength: {
            value: 12,
            message: 'Пароль не больше 12 символов',
          },
        })}
      />
      {errors?.password && (
        <p className='description error'>
          {errors?.password?.message || 'Ошибка заполнения'}
        </p>
      )}
			<button type='submit'>{buttonText}</button>
		</form>
	);
}

export default AuthForm;
