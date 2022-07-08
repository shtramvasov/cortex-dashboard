import React from 'react'
import Sidebar from '../components/Sidebar';

function DashboardPage() {
  return (
		<section className='app-wrapper flex'>
      <Sidebar />
			<div>Dashboard</div>
		</section>
	);
}

export default DashboardPage