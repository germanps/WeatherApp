import React from 'react';
import PropTypes from 'prop-types';
import WeateherLocation from './WeatherLocation';

import './location_list.css';

//Transformar array de strings en array de componentes
const strToComponent = cities => (
  cities.map( city => (  <WeateherLocation city={city} /> ) )
);
const LocationList = ({ cities }) => (
  <div className="wt-location-list">
    {strToComponent(cities)}
  </div>
);

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
}
export default LocationList;