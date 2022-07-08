import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuthenticated = async () => {
		try {
			const res = await fetch('http://localhost:5000/validate', {
				method: 'GET',
				headers: { token: localStorage.token },
			});
			const parseRes = await res.json();
			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		checkAuthenticated();
	}, []);

	const setAuth = boolean => {
		setIsAuthenticated(boolean);
	};

	return (
		<Routes>
			<Route
				path='/'
				element={isAuthenticated ? <DashboardPage /> : <Navigate to='/login' />}
			/>
			<Route
				path='/products'
				element={isAuthenticated ? <ProductsPage /> : <Navigate to='/login' />}
			/>
			<Route
				path='/login'
				element={!isAuthenticated ? <LoginPage setAuth={setAuth}/> : <Navigate to='/' />}
			/>
			<Route
				path='/registration'
				element={!isAuthenticated ? <RegistrationPage setAuth={setAuth}/> : <Navigate to='/' />}
			/>
		</Routes>
	);
}

export default App;
