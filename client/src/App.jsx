import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import EditPage from './pages/EditPage';
import AddPage from './pages/AddPage';
import OrdersPage from './pages/OrdersPage';
import RegistrationPage from './pages/RegistrationPage';
import SettingsPage from './pages/SettingsPage';


function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuthenticated = async () => {
		try {
			const res = await fetch('/validate', {
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
    <>
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
				path='/products/:id'
				element={isAuthenticated ? <EditPage /> : <Navigate to='/login' />}
			/>
			<Route
				path='/orders'
				element={isAuthenticated ? <OrdersPage /> : <Navigate to='/login' />}
			/>
			<Route
				path='/settings'
				element={isAuthenticated ? <SettingsPage /> : <Navigate to='/login' />}
			/>
			<Route
				path='/products/add'
				element={isAuthenticated ? <AddPage /> : <Navigate to='/login' />}
			/>
			<Route
				path='/login'
				element={!isAuthenticated ? <LoginPage setAuth={setAuth}/> : <Navigate to='/' />}
			/>
			<Route
				path='/registration'
				element={!isAuthenticated ? <RegistrationPage setAuth={setAuth}/> : <Navigate to='/' />}
			/>
      <Route
				path='*'
				element={isAuthenticated ? <DashboardPage /> : <Navigate to='/login' />}
			/>
		</Routes>
    <ToastContainer
      autoClose={1500}
      transition={Flip}
    />
    </>
	);
}

export default App;
