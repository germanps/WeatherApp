import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUD} from './../constants/weathers';

const WeatherData = () => (
  <div className="wt-data">
    <WeatherTemperature temperature={20} weatherState= {CLOUD}/>
    <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
  </div>
);

export default WeatherData; 