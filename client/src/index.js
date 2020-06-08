import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { teal, green, red } from '@material-ui/core/colors';

import Reducer from './_reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const theme = createMuiTheme({
	palette: {
		primary: teal,
		secondary: {
			main: '#2196f3',
			light: '#e3f2fd',
		},
		backcolor: {
			main: '#e0f2f1',
		},
		warning: {
			main: '#ffc071',
			dark: '#ffb25e',
		},
		error: {
			xLight: red[50],
			main: red[500],
			dark: red[700],
		},
		success: {
			xLight: green[50],
			main: green[500],
			dark: green[700],
		},
		// type: 'dark'
	},
	typography: {
		fontFamily: "'Work Sans', sans-serif",
		fontSize: 14,
		fontWeightLight: 300, // Work Sans
		fontWeightRegular: 400, // Work Sans
		fontWeightMedium: 700, // Roboto Condensed
		fontFamilySecondary: "'Roboto Condensed', sans-serif",
	},
});

const createStoreWithMiddleware = applyMiddleware(
	promiseMiddleware,
	ReduxThunk,
)(createStore);

ReactDOM.render(
	<Provider
		store={createStoreWithMiddleware(
			Reducer,
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__(),
		)}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
	module.hot.accept();
}
