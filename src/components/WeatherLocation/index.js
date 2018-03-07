import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './weather_location.css';

const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "4af7f8fc3c632f3a83020599a9af7fc1";

class WeatherLocation extends Component{ 

  constructor({ city }){
    super();
    this.state = {
      city,
      data: null
    }
    //console.log("constructor");
  }

  //Solo se ejecutará una vez (podriamos poner cualquier inizialización del componente)
  componentWillMount(){
    //inicializamos con los datos que vienen de la api
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&APPID=${api_key}`;
    fetch(api_weather).then( data => {
      return data.json();
    }).then( weather_data  => {
      const data = transformWeather(weather_data);
      this.setState({ data: data });
    });
  }

  //Se ejecuta después del render
  componentDidMount(){
    //console.log("componentDidMount");
  }

  //Se ejecuta cada vez que el control se actualiza
  componentWillUpdate(){
    //console.log("componentWillUpdate");
  }

  //Se ejcuta después del renderizado
  componentDidUpdate() {
    //console.log("componentDidUpdate");
  }

  render = () => {
    //console.log("render");
    const { city, data } = this.state;
    return (
      <div className="wt-location">
        <Location city={ city }/>
        {data ? <WeatherData data={ data }/> : <CircularProgress size={60} thickness={7} />}
      </div>
    );
  }
}
WeatherLocation.proptypes = {
  city: PropTypes.string,
}
export default WeatherLocation;