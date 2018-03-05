import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weathers';
import './weather_location.css';

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10m/s',
};
class WeatherLocation extends Component{ 
    render = () => (
    <div className="wt-location">
      <Location city={'Barcelona'}/>
      <WeatherData data={ data }/>
    </div>
  );
}

export default WeatherLocation;