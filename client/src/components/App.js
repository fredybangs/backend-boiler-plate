import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../hoc/auth';
// pages for this product
import Login from './views/LoginPage/Login';
import Register from './views/RegisterPage/Register';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import Index from './views/MainPage/Landing';
import Home from './views/MainPage/Home';
import UploadProductPage from './views/UploadProductPage/UploadProductPage';
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<NavBar />
			<div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
				<Switch>
					<Route exact path='/' component={Auth(Index, false)} />
					<Route exact path='/home' component={Auth(Home, true)} />
					<Route exact path='/sign-in' component={Auth(Login, false)} />
					<Route exact path='/sign-up' component={Auth(Register, false)} />
					<Route
						exact
						path='/product/upload'
						component={Auth(UploadProductPage, true)}
					/>
				</Switch>
			</div>
			<Footer />
		</Suspense>
	);
}

export default App;
