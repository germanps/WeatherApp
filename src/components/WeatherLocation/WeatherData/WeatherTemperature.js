import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constants/weathers';
import './weather_data.css';

const stateToIconName = weatherState => {
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case SUN:
      return "day-sunny";
    case RAIN:
      return "rain";
    case SNOW:
      return "snow";
    case WINDY:
      return "windy";
    default:
      return "day-sunny";
  }
};

const getWeatherIcon = weatherState => {
  return (<WeatherIcons className="wt-temperature-icon" name={stateToIconName(weatherState)} size="3x" />);
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="wt-temperature">
    {getWeatherIcon(weatherState)}
    <span className="wt-temperature-temp">{ `${temperature}` }</span>
    <span className="wt-temperature-type">Cº</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string,
};

export default WeatherTemperature;