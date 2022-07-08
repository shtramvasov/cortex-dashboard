import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

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
