import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

function ProductsPage() {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		try {
			const response = await fetch('http://localhost:5000/products');
			const jsonData = await response.json();
			setProducts(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<section className='app-wrapper flex'>
			<Sidebar />
			<section className='wrapper productspage'>
				<h1>Список товаров</h1>
				<div className='table pb-48'>
					<div className='table-head'>
						<ul className='table-row'>
							<li className='table-col'>#</li>
							<li className='table-col'>Наименование</li>
							<li className='table-col'>Стоимость</li>
							<li className='table-col'>Доступно</li>
							<li className='table-col'></li>
						</ul>
					</div>
					<div className='table-body'>
						{products.map((product) => (
							<div key={product.id} className='table-row'>
								<p className='table-col'>{product.id}</p>
								<div className='table-col table-gr'>
									<div>
										<img src={product.image} alt={product.name} />
									</div>
									<div>
										<p>{product.name}</p>
									</div>
								</div>
								<p className='table-col'>{product.price} ₽</p>
								<p className='table-col'>{product.quantity}</p>
								<p className='table-col'>
									<button className='button__delete'></button>
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</section>
	);
}

export default ProductsPage;
