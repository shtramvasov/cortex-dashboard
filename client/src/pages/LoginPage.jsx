import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import cortexLogo from '../images/logo.svg';
import userIcon from '../images/Icon-user.svg';
import userPassword from '../images/Icon-password.svg';

function LoginPage() {
	const formSubmit = (data) => {
		//TODO: req logic
	};

	return (
		<section className='loginpage flex cols jcc'>
			<img className='pb-64' src={cortexLogo} alt='Кортекс' />
			<AuthForm
				method={'POST'}
				formSubmit={formSubmit}
				buttonText={'Войти в аккаунт'}
			/>
			<p className='light loginpage__actions flex'>
				Ещё нет аккаунта?
				<Link to={'/registration'}>Регистрация</Link>
			</p>
			<p className='light description loginpage__dummydata flex cols'>
				Данные тестового аккаунта:
				<div className='flex jcc'>
					<span>
						<img src={userIcon} alt='Пользователь' /> cortex
					</span>
					<span>
						<img src={userPassword} alt='Пользователь' /> 1234
					</span>
				</div>
			</p>
		</section>
	);
}

export default LoginPage;
