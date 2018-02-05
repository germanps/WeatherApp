import React from 'react';
import PropTypes from 'prop-types';
import './weather_location.css';

const Location = ({ city }) => (
    <div className="wt-title">
      <h1>{city}</h1>
    </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location;