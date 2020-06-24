/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function WeatherTile({ temp, feels_like, main, date, iconURL }) {
	const day = date.substring(0, 3),
		time = date.substring(15, 24);
	return (
		<Router>
			<Link
				to={`/${day}`}
				onClick={() => {
					setTimeout(() => {
						window.location.reload();
					}, 100);
				}}
			>
				<div className='weather-tile'>
					<div className='day'>{day}</div>
					<img src={iconURL} alt='weather-img' />
					<div>
						{temp} ℃ / {feels_like} ℃
					</div>
					<div className='main'>{main}</div>
					<div>{time}</div>
				</div>
			</Link>
		</Router>
	);
}

WeatherTile.propsTypes = {
	temp        : PropTypes.number,
	feels_like  : PropTypes.number,
	main        : PropTypes.string,
	description : PropTypes.string,
	date        : PropTypes.string,
	iconURL     : PropTypes.string
};

export default WeatherTile;
