import React from 'react';
import StatisticsCard from './StatisticsCard';

function DashboardStatistics({ data }) {
	return (
		<section className='dashboardpage__statistics flex jcc'>
			<StatisticsCard />
			<StatisticsCard />
			<StatisticsCard />
		</section>
	);
}

export default DashboardStatistics;
