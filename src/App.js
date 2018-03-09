import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Sao Paulo,BR',
  'Barcelona,ES',
  'Cadiz,ES',
  'Montreal,CAN',
  'Clyde,CAN',
  'Bogota,COL',
  'Wolfsburg,GER',
  'Caracas,VEN',
  'Geneva,SWI'
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={ cities }></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
