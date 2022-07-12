import React from 'react';
import Sidebar from '../components/Sidebar';
import image from '../images/products/coffee.jpg'

function OrdersPage() {
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
							<li className='table-col'>Дата</li>
							<li className='table-col'>Статус заказа</li>
							<li className='table-col'></li>
						</ul>
					</div>
					<div className='table-body'>
						{/* Тут будет вставка итема */}
						<div className='table-row'>
							<p className='table-col'>B576524</p>
							<div className='table-col table-gr'>
								<div>
									<img src={image} alt='' />
								</div>
								<div>
									<a href=''>Джинсы Jeans-Dean</a>
								</div>
							</div>
							<p className='table-col'>1200 ₽</p>
							<p className='table-col'>28 июня, 8:24</p>
							<p className='table-col'>Ожидает оплаты</p>
							<p className='table-col'><button className='button__delete'></button></p>
						</div>

						<div className='table-row'>
							<p className='table-col'>B576524</p>
							<div className='table-col table-gr'>
								<div>
									<img src={image} alt='' />
								</div>
								<div>
									<a href=''>Джинсы Jeans-Dean</a>
								</div>
							</div>
							<p className='table-col'>1200 ₽</p>
							<p className='table-col'>28 июня, 8:24</p>
							<p className='table-col'>Ожидает оплаты</p>
							<p className='table-col'><button className='button__delete'></button></p>
						</div>

						<div className='table-row'>
							<p className='table-col'>B576524</p>
							<div className='table-col table-gr'>
								<div>
									<img src={image} alt='' />
								</div>
								<div>
									<a href=''>Джинсы Jeans-Dean</a>
								</div>
							</div>
							<p className='table-col'>1200 ₽</p>
							<p className='table-col'>28 июня, 8:24</p>
							<p className='table-col'>Ожидает оплаты</p>
							<p className='table-col'><button className='button__delete'></button></p>
						</div>
						{/* Тут закончится вставка итема */}
					</div>
				</div>
			</section>
		</section>
	);
}

export default OrdersPage;
