import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import moment from 'moment';

function OrdersPage() {
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
			<section className='wrapper orderspage'>
				<h1>Заказы</h1>
				<div className='table pb-48'>
					<div className='table-head'>
						<ul className='table-row'>
							<li className='table-col'>#</li>
							<li className='table-col'>Товар</li>
							<li className='table-col'>Стоимость</li>
							<li className='table-col'>Количество</li>
							<li className='table-col'>Дата</li>
							<li className='table-col'>Статус заказа</li>
						</ul>
					</div>
					<div className='table-body'>
						{orders.map((order) => (
							<div key={order.id} className='table-row'>
								<p className='table-col'>{order.order_key}</p>
								<div className='table-col table-gr'>
									<div>
										<img src={`${order.image}`} alt={order.product_name} />
									</div>
									<div>
										<p>{order.product_name}</p>
									</div>
								</div>
								<p className='table-col'>{order.price} ₽</p>
								<p className='table-col'>{order.quantity}</p>
								<p className='table-col'>
									{moment(order.order_date).locale('ru').format('D MMM')}
								</p>
								{order.order_status === 'Пришло' ? (
									<p className='table-col table-status delivered'>
										<span>{order.order_status}</span>
									</p>
								) : order.order_status === 'В пути' ? (
									<p className='table-col table-status coming'>
										<span>{order.order_status}</span>
									</p>
								) : order.order_status === 'Ожидает оплаты' ? (
									<p className='table-col table-status pending'>
										<span>{order.order_status}</span>
									</p>
								) : (
									<p className='table-col table-status rejected'>
										<span>{order.order_status}</span>
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</section>
	);
}

export default OrdersPage;
