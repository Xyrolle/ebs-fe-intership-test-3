import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import WeatherForecast from './components/WeatherForecast.js';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' exact component={WeatherForecast} />
					<Route path='/:day_name' exact component={WeatherForecast} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
