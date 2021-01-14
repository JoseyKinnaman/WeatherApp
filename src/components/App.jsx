import React, {useEffect} from 'react';
import './App.css';
import useCurrentLocation from '../hooks/useCurrentLocation';
import Location from './Location'

const App = () => {
  const {location: currentLocation, error: currentError} =useCurrentLocation();
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Location />
    </div>
  );
}

export default App;
