import React from 'react';
import moment from 'moment';
import StatisticsCard from './StatisticsCard';

function DashboardStatistics({ data }) {
  
  // production code
	const today = moment().format('YYYY-MM-DD');
  const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
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
			total += order.price * order.quantity;
		}
		return total;
	}, 0);

  const AverageCheck = data.reduce((total, order) => {
    return (total += Math.round((order.price * order.quantity) / data.length));
  }, 0);
  const weeklyAverageCheck = data.reduce((total, order) => {
    if (moment(order.order_date).format('YYYY-MM-DD') >= lastWeek) {
      total += order.price * order.quantity;
    }
    return Math.round(total / weeklyOrders.length);
  }, 0);

  //dummydata
  const [
		dummytodaySales,
		dummyweeklySales,
		dummytodayOrders,
		dummyweeklyOrders,
		dummyAverageCheck,
		dummyweeklyAverageCheck,
	] = ['16929', '88745', '12', '327', '1117', '1205'];

	return (
		<section className='dashboardpage__statistics flex jcc'>
			<StatisticsCard
				title='Продажи'
				timePeriod='За сегодня'
				timeComparison='За прошлую неделю'
				currentValue={dummytodaySales}
				dynamicsValue={dummyweeklySales}
			/>
			<StatisticsCard
				title='Заказы'
				timePeriod='За сегодня'
				timeComparison='За прошлую неделю'
				currentValue={dummytodayOrders} // .lenght prod
				dynamicsValue={dummyweeklyOrders} // .lenght prod
			/>
			<StatisticsCard
				title='Средний чек'
				timePeriod='За неделю'
				timeComparison='За все время'
				currentValue={dummyweeklyAverageCheck}
				dynamicsValue={dummyAverageCheck}
			/>
		</section>
	);
}

export default DashboardStatistics;
