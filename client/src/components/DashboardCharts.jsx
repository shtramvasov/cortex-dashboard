import React from 'react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from 'recharts';
import moment from 'moment';
import 'moment/locale/ru';

function DashboardCharts({ data }) {

	return (
		<section className='flex cols mb-32'>
			<h1>Динамика продаж и заказов</h1>
			<div className='dashboardpage__chart card card--small flex cols mb-32'>
				<h2>Оборот продаж за неделю</h2>
				<ResponsiveContainer width='99%' height={400}>
					<AreaChart data={data}>
						<XAxis
							dataKey='order_date'
							tickFormatter={(order_date) =>
								moment(order_date).locale('ru').format('dddd')
							}
							dy={12}
							stroke='#E7E5E4'
							tick={{ fill: '#9CA3AF', fontSize: 14 }}
							style={{ fontFamily: 'Inter' }}
						/>
						<YAxis
							dataKey={data.price}
							type='number'
							dx={-12}
							tickCount={6}
							stroke='#E7E5E4'
							domain={[0, 'dataMax + 8000']}
							tick={{ fill: '#9CA3AF', fontSize: 14 }}
							style={{ fontFamily: 'Inter' }}
						/>
						<Area
							type='basis'
							dataKey='price'
							stroke='#8B5CF6'
							fill='#A78BFA'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div className='dashboardpage__chart card card--small flex cols mb-32'>
				<h2>Количество заказов за неделю</h2>
				<ResponsiveContainer width='99%' height={400}>
					<AreaChart data={data}>
						<XAxis
							dataKey='order_date'
							tickFormatter={(order_date) =>
								moment(order_date).locale('ru').format('dddd')
							}
							dy={12}
							stroke='#E7E5E4'
							tick={{ fill: '#9CA3AF', fontSize: 14 }}
							style={{ fontFamily: 'Inter' }}
						/>
						<YAxis
							dataKey={data.quantity}
							type='number'
							dx={-12}
							tickCount={6}
							stroke='#E7E5E4'
							domain={[0, 'dataMax']}
							tick={{ fill: '#9CA3AF', fontSize: 14 }}
							style={{ fontFamily: 'Inter' }}
						/>
						<Area
							type='basis'
							dataKey='quantity'
							stroke='#8B5CF6'
							fill='#A78BFA'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
}

export default DashboardCharts