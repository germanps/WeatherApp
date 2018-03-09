import React from 'react';
import WeateherLocation from './WeatherLocation';
import './location_list.css';

const LocationList = () => (
  <div className="wt-location-list">
    <WeateherLocation city={"Sao Paulo,br"} />
    <WeateherLocation city={"Montreal,can"} />
    <WeateherLocation city={"New York,usa"} />
  </div>
);

export default LocationList;