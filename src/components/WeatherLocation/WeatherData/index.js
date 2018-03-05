import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './weather_data.css';

const WeatherData = ({ data }) => {
  const { temperature, weatherState, humidity, wind } = data;
  return (
  <div className="wt-data">
    <WeatherTemperature temperature={temperature} weatherState= {weatherState}/>
    <WeatherExtraInfo humidity={humidity} wind={wind}/>
  </div>);
};
//Validación
WeatherData.propTypes =  {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
}

export default WeatherData;