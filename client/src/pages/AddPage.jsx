import React from 'react'
import ProductForm from '../components/ProductForm';
import Sidebar from '../components/Sidebar';

function AddPage() {
  return (
		<section className='app-wrapper flex'>
			<Sidebar />
			<section className='wrapper productpage'>
        <ProductForm product={''} action={'add'}/>
			</section>
		</section>
	);
}

export default AddPage