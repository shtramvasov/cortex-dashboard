import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TableHead from '../components/ui/TableHead';
import TableItemProduct from '../components/ui/TableItemProduct';

function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [result, setResult] = useState('');

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
	}, [products]);

	return (
		<section className='app-wrapper flex'>
			<Sidebar />
			<section className='wrapper productspage'>
				<h1>Список товаров</h1>
				<input
					type='text'
					className='input__search'
					onChange={(event) => {
						setResult(event.target.value);
					}}
				/>
				<Link to={'/products/add'}>
					<button>Добавить товар</button>
				</Link>
				<section className='table pb-48'>
					<TableHead
						headers={['#', 'Наименование', 'Стоимость', 'Доступно']}
						deleteButton={true}
					/>
					<div className='table-body'>
						{products
							.filter((product) =>
								result === ''
									? product
									: product.name.toLowerCase().includes(result.toLowerCase())
							)
							.map((product, index) => (
								<TableItemProduct key={index} product={product} />
							))}
					</div>
				</section>
			</section>
		</section>
	);
}

export default ProductsPage;
