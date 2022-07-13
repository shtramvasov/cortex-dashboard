import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import avatar from '../images/avatar-default.svg';

function SettingsForm({ method, buttonText = 'Сохранить изменения' }) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
  const navigate = useNavigate();
	const formSubmit = async (data) => {
		try {
			const response = await fetch('/settings', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
      if (data.username === 'cortex') {
        toast.error('Пароль для суперадмина нельзя изменять');
        return;
      } else {       
        toast.success('Пароль успешно изменен 🤫');
        navigate('/');
      }
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className='settingspage__wrapper card card--big flex cols'>
			<h1 className='pb-80'>Настройки аккаунта</h1>
			<img src={avatar} alt={localStorage.getItem('username')} />
			<form
				className='settingspage__form flex cols'
				method={method}
				onSubmit={handleSubmit(formSubmit)}>
				<label>
					Аккаунт
					<input
						value={localStorage.getItem('username')}
						{...register('username')}
					/>
				</label>
				<label>
					Сменить пароль
					<input
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
				</label>
				<button type='submit'>{buttonText}</button>
			</form>
		</div>
	);
}

export default SettingsForm;
