import React from 'react';
import PropTypes from 'prop-types';
import './weather_data.css';

const WeatherExtraInfo = ({ humidity, wind}) => (
  <div className="wt-extra-info">
    <span className="wt-extra-info-text">{`Humedad: ${humidity} % `}</span>
    <span className="wt-extra-info-text">{`Viento: ${wind}`}</span>
  </div>
);

WeatherExtraInfo.proptypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;