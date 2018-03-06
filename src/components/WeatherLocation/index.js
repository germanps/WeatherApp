import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './weather_location.css';

const location = "Sant Cugat del Valles, ES";
const api_key = "4af7f8fc3c632f3a83020599a9af7fc1";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;

class WeatherLocation extends Component{ 

  constructor(){
    super();
    this.state = {
      city: 'Sant Cugat',
      data: null
    }
    console.log("constructor");
  }

  handleUpdate = () => {
    fetch(api_weather).then( data => {;
      return data.json();
    }).then( weather_data  => {
      const data = transformWeather(weather_data);
      this.setState({ data: data });
    });
  }

  //Solo se ejecutará una vez (podriamos poner cualquier inizialización del componente)
  componentWillMount(){
    //inicializamos con los datos que vienen de la api
    this.handleUpdate();
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
        {data ? <WeatherData data={ data }/> : <h4>Cargando datos...</h4>}
      </div>
    );
  }
}
export default WeatherLocation;