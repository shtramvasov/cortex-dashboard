import React from 'react';
import AuthForm from '../components/AuthForm';

function LoginPage() {
	const formSubmit = (data) => {
		//TODO: req logic
	};

	return (
		<div>
			<img src='' alt='' />
			<AuthForm
				method={'POST'}
				formSubmit={formSubmit}
				buttonText={'Войти в аккаунт'}
			/>
		</div>
	);
}

export default LoginPage;
