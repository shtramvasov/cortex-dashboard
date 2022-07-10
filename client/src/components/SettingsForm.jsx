import React from 'react';
import { useForm } from 'react-hook-form';
import avatar from '../images/avatar-default.svg';

function SettingsForm() {
	return (
		<div className='settingspage__wrapper card card--big flex cols'>
			<h1 className='pb-80'>Настройки аккаунта</h1>
			<img src={avatar} alt={localStorage.getItem('username')} />
			<form className='settingspage__form flex cols'>
				<label>
					Аккаунт
					<input />
				</label>
				<label>
					Сменить пароль
					<input />
				</label>
        <button type='submit'></button>
			</form>
		</div>
	);
}

export default SettingsForm;
