import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () => (
  <div className="wt-location">
    <Location city={'Barcelona'}/>
    <WeatherData />
  </div>
);

export default WeatherLocation;