import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Help from './modules/views/Help';
import AppFooter from './modules/views/AppFooter';
import MainPageHeader from './modules/views/MainPageHeader';
import WhyUs from './modules/views/WhyUs';
import HowItWorks from './modules/views/HowItWorks';
import AppAppBar from './modules/views/AppAppBar';

function Index() {
	return (
		<React.Fragment>
			<AppAppBar />
			<MainPageHeader />
			<WhyUs />
			<HowItWorks />
			<Help />
			<AppFooter />
		</React.Fragment>
	);
}

export default withRoot(Index);
