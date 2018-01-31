import React from 'react';

const WeatherExtraInfo = ({ humidity, wind}) => (
  <div className="wt-extra-info">
    <span>{`${humidity} % | `}</span>
    <span>{`${wind} wind`}</span>
  </div>
);

export default WeatherExtraInfo;