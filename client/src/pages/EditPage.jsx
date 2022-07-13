import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import Sidebar from '../components/Sidebar';

function EditPage() {
	const { state } = useLocation();
	const [product, setProduct] = useState([]);

	const getProduct = async () => {
		try {
			const response = await fetch(`/products/${state}`);
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
        <ProductForm product={product} action={'edit'}/>
			</section>
		</section>
	);
}

export default EditPage;
