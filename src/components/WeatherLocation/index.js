import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from './../../constants/weathers';
import './weather_location.css';

const data1 = {
  temperature: 18,
  weatherState: WINDY,
  humidity: 5,
  wind: '20m/s',
};
const data2 = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10m/s',
};
class WeatherLocation extends Component{ 

  constructor(){
    super();
    this.state = {
      city: 'Barcelona',
      data: data1
    } 
  }

  handleUpdateClick = () => {
    this.setState({
      city: 'Girona',
      data: data2
    });
    console.log("Actualizado!");
  }

  render = () => {
    const {city, data} = this.state;
    return (
      <div className="wt-location">
        <Location city={city}/>
        <WeatherData data={ data }/>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}
export default WeatherLocation;