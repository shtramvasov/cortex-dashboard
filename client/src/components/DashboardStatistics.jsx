import React from 'react';
import moment from 'moment';
import StatisticsCard from './StatisticsCard';

function DashboardStatistics({ data }) {
	const today = moment().format('YYYY-MM-DD');
  const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');

  // production code
	const todayOrders = data.filter(
		(order) => moment(order.order_date).format('YYYY-MM-DD') == today
	);
	const weeklyOrders = data.filter(
		(order) => moment(order.order_date).format('YYYY-MM-DD') >= lastWeek
	);

	const todaySales = data.reduce((total, order) => {
		if (moment(order.order_date).format('YYYY-MM-DD') == today) {
			total = total + order.price * order.quantity;
		}
		return total;
	}, 0);
	const weeklySales = data.reduce((total, order) => {
		if (moment(order.order_date).format('YYYY-MM-DD') >= lastWeek) {
			total = total + order.price * order.quantity;
		}
		return total;
	}, 0);

  


	console.log(weeklySales); // delete
	return (
		<section className='dashboardpage__statistics flex jcc'>
			<StatisticsCard
				title='Продажи'
				timePeriod='За сегодня'
				timeComparison='За прошлую неделю'
				currentValue={todaySales}
				dynamicsValue={weeklySales}
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
