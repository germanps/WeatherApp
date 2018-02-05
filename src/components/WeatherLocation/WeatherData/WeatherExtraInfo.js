import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind}) => (
  <div className="wt-extra-info">
    <span>{`${humidity} % | `}</span>
    <span>{`${wind} wind`}</span>
  </div>
);

WeatherExtraInfo.proptypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;