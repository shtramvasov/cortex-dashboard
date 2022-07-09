import React from 'react';
import moment from 'moment';
import StatisticsCard from './StatisticsCard';

function DashboardStatistics({ data }) {
	const today = moment().format('YYYY-MM-DD');
  const todayOrders = data.filter(
    (order) => moment(order.order_date).format('YYYY-MM-DD') == today
  ); // production code
	const weeklyOrders = data.filter(
		(order) =>
			moment(order.order_date).format('YYYY-MM-DD') >=
			moment().subtract(7, 'days').format('YYYY-MM-DD')
	); // production code
	// console.log(weeklyOrders); // delete
	return (
		<section className='dashboardpage__statistics flex jcc'>
			<StatisticsCard
				title='Продажи'
				timePeriod='За сегодня'
				timeComparison='За прошлую неделю'
				currentValue={'16929'}
				dynamicsValue={''}
			/>
			<StatisticsCard
				title='Заказы'
				timePeriod='За сегодня'
				timeComparison='За прошлую неделю'
				currentValue={todayOrders.length}
				dynamicsValue={weeklyOrders.length}
			/>
			<StatisticsCard
				title='Средний чек'
				timePeriod='За месяц'
				timeComparison='За все время'
				currentValue={'16929'}
				dynamicsValue={''}
			/>
		</section>
	);
}

export default DashboardStatistics;
