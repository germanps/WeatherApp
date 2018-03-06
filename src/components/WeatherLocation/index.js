import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { SUN } from './../../constants/weathers';
import './weather_location.css';

const location = "Sant Cugat del Valles, ES";
const api_key = "4af7f8fc3c632f3a83020599a9af7fc1";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;
const data1 = {
  temperature: 18.5,
  weatherState: SUN,
  humidity: 5,
  wind: '20m/s',
};

class WeatherLocation extends Component{ 

  constructor(){
    super();
    this.state = {
      city: 'Sant Cugat',
      data: data1
    }
    console.log("constructor");
  }

  handleUpdateClick = () => {
    fetch(api_weather).then( data => {
      console.log(data);
      return data.json();
    }).then( weather_data => {
      const data = transformWeather(weather_data);
      this.setState({ data: data });
      console.log(weather_data);
    });
    console.log("Actualizado!");
  }

  //Solo se ejecutará una vez (podriamos poner cualquier inizialización del componente)
  componentWillMount(){
    console.log("componentWillMount");
  }

  //Se ejecuta después del render
  componentDidMount(){
    console.log("componentDidMount");
  }

  //Se ejecuta cada vez que el control se actualiza
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }

  //Se ejcuta después del renderizado
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render = () => {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="wt-location">
        <Location city={ city }/>
        <WeatherData data={ data }/>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}
export default WeatherLocation;