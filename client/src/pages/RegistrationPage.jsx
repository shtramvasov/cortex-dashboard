import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthForm from '../components/AuthForm';
import cortexLogo from '../images/logo.svg';


function RegistrationPage({ setAuth }) {
	const formSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/registration', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
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
      console.error(err.message)
    }
	};

	return (
		<section className='loginpage flex cols jcc'>
			<img className='pb-64' src={cortexLogo} alt='Кортекс' />
			<AuthForm
				method={'POST'}
				formSubmit={formSubmit}
				buttonText={'Зарегистрироваться'}
			/>
			<p className='light loginpage__actions flex'>
				Уже есть аккаунт?
				<Link to={'/login'}>Вход</Link>
			</p>
		</section>
	);
}

export default RegistrationPage;
