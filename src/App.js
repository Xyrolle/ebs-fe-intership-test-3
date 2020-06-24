import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import WeatherDaily from './components/WeatherDaily.js';
import WeatherHourly from './components/WeatherHourly.js';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' exact component={WeatherDaily} />
					<Route path='/:day_name' component={WeatherHourly} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
