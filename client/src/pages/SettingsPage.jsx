import React from 'react';
import SettingsForm from '../components/SettingsForm';
import Sidebar from '../components/Sidebar';

function SettingsPage() {

	return (
		<section className='app-wrapper flex'>
			<Sidebar />
			<section className='wrapper settingspage'>
				<SettingsForm method={'POST'} />
			</section>
		</section>
	);
}

export default SettingsPage;