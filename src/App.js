import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Weather from './components/Weather.js';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/' exact component={Weather} />
					<Route path='/:day_name' exact component={Weather} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
