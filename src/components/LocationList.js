import React from 'react';
import WeateherLocation from './WeatherLocation';

const LocationList = () => (
  <div>
    <WeateherLocation city={"Barcelona,es"} />
    <WeateherLocation city={"Paris,fr"} />
    <WeateherLocation city={"New York,usa"} />
  </div>
);

export default LocationList;