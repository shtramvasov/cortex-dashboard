import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import cortexLogo from '../images/logo.svg';


function RegistrationPage() {
	const formSubmit = (data) => {
		//TODO: req logic
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
