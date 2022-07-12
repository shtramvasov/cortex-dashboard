import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function EditPage() {
	const { state } = useLocation();
	const [product, setProduct] = useState([]);

	const getProduct = async () => {
		try {
			const response = await fetch(`http://localhost:5000/products/${state}`);
			const jsonData = await response.json();

			setProduct(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProduct();
	});

	return (
		<section className='app-wrapper flex'>
			<Sidebar />
			<section className='wrapper productpage'>
				{/* Edit Form */}
				<div className='productpage__wrapper card card--big flex cols'>
					<h1>{product.name}</h1>
					<form className='productpage__form flex' method='' onSubmit=''>
						<div className='productpage__form__column'>
							<label>
								Название
								<input placeholder={product.name} />
							</label>
							<label>
								Описание
								<textarea
									placeholder={product.description}
									className='input'
									cols='30'
									rows='10'
								></textarea>
							</label>
						</div>
						<div className='productpage__form__column'>
							<label>
								Загрузить Изображение
								<input />
							</label>
							<label>
								Цена
								<input placeholder={product.price} />
							</label>
							<label>
								Количество
								<input placeholder={product.quantity} />
							</label>
						</div>
						<button type='submit'>Добавить</button>
					</form>
				</div>
				{/* Edit Form */}
			</section>
		</section>
	);
}

export default EditPage;
