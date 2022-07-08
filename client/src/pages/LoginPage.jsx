import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthForm from '../components/AuthForm';
import cortexLogo from '../images/logo.svg';
import userIcon from '../images/Icon-user.svg';
import userPassword from '../images/Icon-password.svg';

function LoginPage({ setAuth }) {

	const formSubmit = async (data) => {
    try {
			const response = await fetch('http://localhost:5000/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			const parseRes = await response.json();
			localStorage.setItem('token', parseRes.token);
      localStorage.setItem('username', data.username);
      if (parseRes.token) {
        toast.success(`Добро пожаловать, ${data.username}`);
        setAuth(true);
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<section className='loginpage flex cols jcc'>
			<img className='pb-64' src={cortexLogo} alt='Кортекс' />
			<AuthForm
				method={'POST'}
				formSubmit={formSubmit}
				setAuth={setAuth}
				buttonText={'Войти в аккаунт'}
			/>
			<p className='light loginpage__actions flex'>
				Ещё нет аккаунта?
				<Link to={'/registration'}>Регистрация</Link>
			</p>
			<div className='loginpage__dummydata flex cols'>
				<p className='light description'>Данные тестового аккаунта:</p>
				<div className='flex jcc'>
					<p className='light description'>
						<img src={userIcon} alt='Пользователь' /> cortex
					</p>
					<p className='light description'>
						<img src={userPassword} alt='Пользователь' /> 1234
					</p>
				</div>
			</div>
		</section>
	);
}

export default LoginPage;
