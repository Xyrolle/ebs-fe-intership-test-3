import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid_v4 } from 'uuid';

import WeatherTile from './WeatherTile.js';

import '../styles/WeatherTile.css';
import '../styles/Weather.css';

function WeatherHourly({ match }) {
	const [ dailyWeather, updateWeather ] = useState([]);

	const KEY = 'c2126ddbad599441b6b459bc90a0ec70',
		BASE_ICON_URL = 'http://openweathermap.org/img/wn/';

	useEffect(
		() => {
			const extractWeatherData = (data) => {
				let weatherData = [];
				data.list.forEach((day) => {
					let oneDayWeather = {
						main       : day.weather[0].main,
						temp       : day.main.temp,
						feels_like : day.main.feels_like,
						date       : new Date(day.dt * 1000).toString(),
						iconURL    : getIconURL(day.weather[0].icon)
					};
					// show only weather for day that we clicked on
					if (oneDayWeather.date.substring(0, 3) === match.params.day_name) {
						weatherData.push(oneDayWeather);
					}
				});

				return weatherData;
			};
			const URL = `https://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&appid=${KEY}`;
			axios.get(URL).then((res) => {
				let weatherData = extractWeatherData(res.data);
				updateWeather(weatherData);
			});
		},
		[ match.params.day_name ]
	);

	const getIconURL = (iconID) => {
		return `${BASE_ICON_URL}${iconID}@4x.png`;
	};

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
}

export default WeatherHourly;
