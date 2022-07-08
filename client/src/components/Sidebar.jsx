import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.svg';
import UserAvatar from '../images/avatar-default.svg';

function Sidebar() {
	return (
		<section className='sidebar flex cols'>
			<img className='sidebar__logo' src={Logo} alt='Кортекс' />
			<nav className='sidebar__menu flex cols'>
				<NavLink className='sidebar__menu__dashboard' to='/'>
					Сводка
				</NavLink>
				<NavLink className='sidebar__menu__products' to='/products'>
					Товары
				</NavLink>
				<NavLink className='sidebar__menu__orders' to='/orders'>
					Заказы
				</NavLink>
				<NavLink className='sidebar__menu__settings' to='/settings'>
					Настройки
				</NavLink>
			</nav>
			<div className='sidebar__userblock flex'>
				<img src={UserAvatar} alt={localStorage.getItem('username')} />
				<p className='bold'>{localStorage.getItem('username')}</p>
			</div>
		</section>
	);
}

export default Sidebar;
