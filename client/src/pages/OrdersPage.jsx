import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import TableHead from '../components/ui/TableHead';
import TableItemOrder from '../components/ui/TableItemOrder';

function OrdersPage() {
	const [orders, setOrders] = useState([]);
	const [result, setResult] = useState('');

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
				<input
					type='text'
					className='input__search'
					onChange={(event) => {
						setResult(event.target.value);
					}}
				/>
				<section className='table pb-48'>
					<TableHead
						headers={[
							'#',
							'Товар',
							'Стоимость',
							'Количество',
							'Дата',
							'Статус заказа',
						]}
					/>
					<div className='table-body'>
						{orders
							.filter((order) =>
								result === ''
									? order
									: order.product_name
											.toLowerCase()
											.includes(result.toLowerCase())
							)
							.map((order) => (
								<TableItemOrder order={order} />
							))}
					</div>
				</section>
			</section>
		</section>
	);
}

export default OrdersPage;
