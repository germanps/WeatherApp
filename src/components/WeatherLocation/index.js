import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weathers';
import './weather_location.css';

const location = "Barcelona, es";
const api_key = "4af7f8fc3c632f3a83020599a9af7fc1";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;
const data1 = {
  temperature: 18,
  weatherState: SUN,
  humidity: 5,
  wind: '20m/s',
};

class WeatherLocation extends Component{ 

  constructor(){
    super();
    this.state = {
      city: 'Barcelona',
      data: data1
    } 
  }

  getTemp = kelvin => {
    return convert(kelvin).from('K').to('C');
  }
  getWeatherState = (weather) => {
    return SUN;
  }

  getData = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(this.weather);
    const temperature = this.getTemp(temp);
    const data = {
      humidity,
      temperature,
      weatherState,
      wind: `${speed} m/s`,
    }
    return data;
  }

  handleUpdateClick = () => {
    fetch(api_weather).then( data => {
      console.log(data);
      return data.json();
    }).then( weather_data => {
      const data = this.getData(weather_data);
      this.setState({ data: data });
      console.log(weather_data);
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