import {useState, useEffect} from 'react';
import Weather from './Weather';


const CurrentLocation = () => {
  const [location, setLocation] = useState();
  const [, setError] = useState();

  const handleSuccess = position => {
    const {latitude, longitude } = position.coords
    setLocation([latitude,longitude]);
  };
  const handleError = error => {
    setError(error.message);
  };
  const getLocation = async () => {
    const { geolocation } = navigator;
    if(!geolocation){
      setError('Gelocation is not supported.');
      return;
      }
      geolocation.getCurrentPosition(handleSuccess,handleError);
    }

  return (
    <>
      <button onClick={getLocation} className="ui button">Current Weather</button>
      <Weather location={location} />
    </>
  )
};

export default CurrentLocation;

