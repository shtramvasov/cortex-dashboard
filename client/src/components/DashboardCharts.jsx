import React from 'react'
import { ResponsiveContainer, AreaChart , Area , BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import moment from 'moment';
import 'moment/locale/ru';

function DashboardCharts({ data }) {

	return (
		<section className='flex cols mb-32'>
			<h1>Динамика продаж и заказов</h1>
			<div className='dashboardpage__chart card card--small flex cols mb-32'>
				<p className='bold'>Оборот продаж за неделю</p>
				<ResponsiveContainer width='99%' height={350}>
					<AreaChart data={data} cursor='pointer'>
						<XAxis
							dataKey='order_date'
							tickFormatter={(order_date) =>
								moment(order_date).locale('ru').format('dddd')
							}
							stroke='#E7E5E4'
							tick={{ fill: '#9CA3AF', fontSize: 14 }}
							style={{ fontFamily: 'Inter' }}
						/>
						<CartesianGrid strokeDasharray='3 3' opacity={0.7} />
						<YAxis
							dataKey={data.price}
							type='number'
							tickCount={6}
							stroke='#E7E5E4'
							domain={[0, 'dataMax + 1000']}
							tick={{ fill: '#9CA3AF', fontSize: 12 }}
							style={{ fontFamily: 'Inter' }}
						/>
						<Area
							type='monotone'
							dataKey='price'
							stroke='#A78BFA'
							activeDot={{ fill: '#8B5CF6', r: 4 }}
							strokeWidth='1'
							fill='#A78BFA'
							fillOpacity='0.8'
						/>
						<Tooltip content={<AreaTooltip />} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div className='dashboardpage__chart card card--small flex cols'>
				<p className='bold'>Количество заказов за неделю</p>
				<ResponsiveContainer width='99%' height={350}>
					<BarChart data={data} cursor='pointer'>
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
						<CartesianGrid strokeDasharray='3 3' opacity={0.7} />
						<Bar dataKey='quantity' fill='#A78BFA' fillOpacity='0.9' />
						<Tooltip
							content={<BarTooltip />}
							cursor={{ fill: 'transparent' }}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
}

const AreaTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className='dashboardpage__chart__tooltip'>
				<p>Продано товара на сумму:</p>
				<span>{payload[0].value} ₽</span>
			</div>
		);
	}
	return null;
};
const BarTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className='dashboardpage__chart__tooltip'>
				<p>Заказов обработано:</p>
				<span>{payload[0].value}</span>
			</div>
		);
	}
	return null;
};

export default DashboardCharts