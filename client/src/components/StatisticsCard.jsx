import React from 'react';
import growthIcon from '../images/Icon-growth.svg';
import declineIcon from '../images/Icon-decline.svg';

function StatisticsCard({ title, timePeriod, timeComparison, currentValue, dynamicsValue }) {
  const change = (currentValue / dynamicsValue) * 100;
	return (
		<div role='itemcard' className='dashboardpage__statistics__card card card--small'>
			<h2>{title}</h2>
			<div className='dashboardpage__statistics__info flex cols jcc'>
				<p className='light'>{timePeriod}:</p>
        {title == 'Заказы'
          ? <h1>{currentValue}</h1>
          : <h1>₽ {currentValue}</h1>
        }
			</div>
			<div className='flex jcsb'>
				<p className='light'>{timeComparison}: {dynamicsValue}</p>
				<p className='light'>
					<img 
            src={change >= 0 ? growthIcon : declineIcon} 
            alt={timeComparison} /> {Math.round(change)}%
				</p>
			</div>
		</div>
	);
}

export default StatisticsCard;
