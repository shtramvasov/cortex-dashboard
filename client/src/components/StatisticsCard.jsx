import React from 'react';
import growthIcon from '../images/Icon-growth.svg';
import declineIcon from '../images/Icon-decline.svg';

function StatisticsCard() {
	return (
		<div className='dashboardpage__statistics__card card card--small'>
			<h2>Продажи</h2>
			<div className='dashboardpage__statistics__info flex cols jcc'>
				<p className='light'>За сегодня</p>
				<h1>₽ 16929</h1>
			</div>
			<div className='flex jcsb'>
				<p className='light'>За прошлую неделю: ₽ 88К</p>
				<p className='light'>
					<img src={growthIcon} alt='' /> 24%
				</p>
			</div>
		</div>
	);
}

export default StatisticsCard;
