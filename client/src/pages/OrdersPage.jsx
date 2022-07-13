import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import TableHead from '../components/ui/TableHead';
import TableItemOrder from '../components/ui/TableItemOrder';

function OrdersPage() {
	const [orders, setOrders] = useState([]);
	const [result, setResult] = useState('');

	const getOrders = async () => {
		try {
			const response = await fetch('/orders');
			const jsonData = await response.json();
			setOrders(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getOrders();
	}, []);

	const sortOrders = (type) => {
		const sortedArray = [...orders].sort((a, b) =>
			a[type] > b[type] ? -1 : 1
		);
		setOrders(sortedArray);
	};

	return (
		<section className='app-wrapper flex'>
			<Sidebar />
			<section className='wrapper orderspage'>
				<h1>Заказы</h1>
				<input
					type='text'
					className='input__search'
					onSelect={(event) => {
						setResult(event.target.value);
					}}
				/>
        <select onChange={(e) => sortOrders(e.target.value)}>
          <option value='product_name'>Товар</option>
          <option value='price'>Стоимость</option>
          <option value='quantity'>Количество</option>
          <option value='order_date'>Дата</option>
          <option value='order_status'>Статус заказа</option>
        </select>
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
							.map((order, index) => (
								<TableItemOrder key={index} order={order} />
							))}
					</div>
				</section>
			</section>
		</section>
	);
}

export default OrdersPage;
