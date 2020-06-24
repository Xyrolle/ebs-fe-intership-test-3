import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid_v4 } from 'uuid';

import WeatherTile from './WeatherTile.js';
import { getIconURL } from '../utils.js';

import '../styles/WeatherTile.css';
import '../styles/Weather.css';

const WeatherDaily = () => {
	const [ dailyWeather, updateWeather ] = useState([]);

	useEffect(() => {
		const extractWeatherData = (data) => {
			let weatherData = [];
			data.list.forEach((day) => {
				let oneDayWeather = {
					main        : day.weather[0].main,
					description : day.weather[0].description,
					temp        : day.temp.day,
					feels_like  : day.feels_like.day,
					date        : new Date(day.dt * 1000).toString(),
					iconURL     : getIconURL(day.weather[0].icon)
				};
				weatherData.push(oneDayWeather);
			});

			return weatherData;
		};

		const URL = `http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&units=metric&appid=${process.env
			.REACT_APP_API_KEY_DAILY_WEATHER}`;

		axios.get(URL).then((res) => {
			let weatherData = extractWeatherData(res.data);
			updateWeather(weatherData);
		});
	}, []);

	return (
		<div className='container'>
			{dailyWeather.map((day) => {
				return (
					<WeatherTile
						main={day.main}
						description={day.description}
						temp={day.temp}
						feels_like={day.feels_like}
						date={day.date}
						iconURL={day.iconURL}
						key={uuid_v4()}
					/>
				);
			})}
		</div>
	);
};

export default WeatherDaily;
