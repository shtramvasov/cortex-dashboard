import React from 'react'
import { Link } from 'react-router-dom';

function TableItemProduct({ product }) {
	const deleteProduct = async (id) => {
		try {
			const res = await fetch(`http://localhost:5000/products/${id}`, {
				method: 'DELETE',
			});
		} catch (err) {
			console.error(err.message);
		}
	}
  
  return (
    <div key={product.id} className='table-row'>
      <p className='table-col'>{product.id}</p>
      <div className='table-col table-gr'>
        <div><img src={product.image} alt={product.name} /></div>
        <div><Link to={`/products/${product.id}`} state={product.id}>{product.name}</Link></div>
      </div>
      <p className='table-col'>{product.price} ₽</p>
      <p className='table-col'>{product.quantity}</p>
      <p className='table-col'>
        <button
          className='button__delete'
          onClick={() => deleteProduct(product.id)}>
        </button>
      </p>
    </div>
  )
}

export default TableItemProduct;