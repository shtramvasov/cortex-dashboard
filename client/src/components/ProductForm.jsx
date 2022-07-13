import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ProductForm({ product, action }) {
  const defaultValues = {
		name: product.name,
		description: product.description,
		price: product.price,
		quantity: product.quantity,
	};
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		defaultValues: {
			defaultValues,
		},
	});

	const navigate = useNavigate();
	const { state } = useLocation();

	const getProduct = async () => {
		try {
			const response = await fetch(`/products/${state}`);
			const jsonData = await response.json();
			reset(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProduct();
	}, [reset]);

	const editProduct = async (data) => {
		try {
			data.id = product.id;
			const response = await fetch('/edit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			toast.success('Изменения сохранены');
			navigate('/products');
		} catch (err) {
			console.error(err.message);
		}
	};

  const addProduct = async (data) => {
		try {
			const response = await fetch('/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			toast.success('Товар добавлен');
			navigate('/products');
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className='productpage__wrapper card card--big flex cols'>
			{product.name ? <h1>{product.name}</h1> : <h1>Добавление товара</h1>}
			<form
				className='productpage__form flex'
				method='POST'
				onSubmit={
					action === 'edit'
						? handleSubmit(editProduct)
						: handleSubmit(addProduct)}
        >
				<div className='productpage__form__column'>
					<label>
						Название
						<input
							{...register('name', {
								required: 'Введите название товара',
								maxLength: {
									value: 26,
									message: 'Слишком длинное название',
								},
							})}
						/>
						{errors?.name && (<p className='description error'>{errors?.name?.message || 'Ошибка заполнения'}</p>)}
					</label>
					<label>
						Описание
						<textarea
							{...register('description')}
							className='input'
							cols='35'
							rows='10'
						/>
					</label>
				</div>
				<div className='productpage__form__column'>
					<label>
						Загрузить Изображение
						<input 
              className='input__file' 
              type='file'
              disabled
            /> 
					</label>
					<label>
						Цена
						<input
							type='number'
							{...register('price', {
								required: 'Введите цену товара',
							})}
						/>
						{errors?.price && (<p className='description error'>{errors?.price?.message || 'Ошибка заполнения'}</p>)}
					</label>
					<label>
						Количество
						<input
							type='number'
							{...register('quantity', {
								required: 'Введите количество товара',
							})}
						/>
						{errors?.quantity && (<p className='description error'>{errors?.quantity?.message || 'Ошибка заполнения'}</p>)}
					</label>
				</div>
				<button type='submit'>Отправить</button>
			</form>
		</div>
	);
}

export default ProductForm;
