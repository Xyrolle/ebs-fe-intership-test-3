import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/WeatherTile.css';

const WeatherTile = ({ temp, feels_like, main, date, iconURL, day_name }) => {
	const day = date.substring(0, 3),
		time = date.substring(15, 24);

	return (
		<Link
			onClick={(evt) =>

					day_name !== undefined ? evt.preventDefault() :
					''}
			to={`/${day}`}
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
	);
};

WeatherTile.propTypes = {
	temp        : PropTypes.number,
	feels_like  : PropTypes.number,
	main        : PropTypes.string,
	description : PropTypes.string,
	date        : PropTypes.string,
	iconURL     : PropTypes.string,
	day_name    : PropTypes.string
};

export default WeatherTile;
