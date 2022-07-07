import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route 
        path='/' 
        element={isAuthenticated
        ? (<DashboardPage />)
        : (<Navigate to='/login' />)}
      />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
	);
}

export default App;
