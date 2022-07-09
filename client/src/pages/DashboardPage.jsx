import React, { useEffect, useState } from 'react';
import DashboardStatistics from '../components/DashboardStatistics';
import Sidebar from '../components/Sidebar';
import warningIcon from '../images/icon-warning.svg';

function DashboardPage() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
		try {
			const response = await fetch('http://localhost:5000/orders');
			const jsonData = await response.json();
			setOrders(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getOrders();
	}, []);
  
	return (
		<section className='app-wrapper flex'>
			<Sidebar />
			<section className='wrapper dashboardpage'>
				<h1>Аналитический Обзор</h1>
				<div className='dashboardpage__warning flex mb-32'>
					<img src={warningIcon} alt='Предупреждение' />
					<p className='description'>
						В данный момент в сводке используются демонстрационные данные
					</p>
				</div>
        <DashboardStatistics data={orders} />
			</section>
		</section>
	);
}

export default DashboardPage;
