import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid_v4 } from 'uuid';
import { useParams } from 'react-router-dom';

import WeatherTile from './WeatherTile.js';
import { getIconURL } from '../utils.js';

import '../styles/Weather.css';

const WeatherForecast = () => {
	const { day_name } = useParams();
	const [ weather, updateWeather ] = useState([]);

	useEffect(
		() => {
			const extractWeatherData = (data) => {
				const weatherData = [],
					daysAdded = new Set();
				data.list.forEach((day) => {
					let oneDayWeather = {
						main       : day.weather[0].main,
						temp       : day.main.temp,
						feels_like : day.main.feels_like,
						date       : new Date(day.dt * 1000).toString(),
						iconURL    : getIconURL(day.weather[0].icon)
					};

					const current_day = oneDayWeather.date.substring(0, 3);
					if (day_name && current_day === day_name) {
						weatherData.push(oneDayWeather);
					} else if (!day_name && !daysAdded.has(current_day)) {
						weatherData.push(oneDayWeather);
						daysAdded.add(current_day);
					}
				});

				return weatherData;
			};

			const URL = `https://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&appid=${process.env
				.REACT_APP_API_KEY_WEATHER}`;

			axios.get(URL).then((res) => {
				let weatherData = extractWeatherData(res.data);
				updateWeather(weatherData);
			});
		},
		[ day_name ]
	);

	return (
		<div className='container'>
			{weather.map((day) => {
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

export default WeatherForecast;
