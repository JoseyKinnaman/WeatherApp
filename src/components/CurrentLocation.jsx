import {useState, useEffect} from 'react';
import Weather from './Weather';


const CurrentLocation = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  const handleSuccess = position => {
    const {latitude, longitude } = position.coords;

    setLocation(
      [latitude,
      longitude]);
    console.log(latitude, longitude)
    };

  const handleError = error => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;
    if(!geolocation){
      setError('Gelocation is not supported.');
      return;
      }

      geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

  return (
    <>
      {location} {error}
      <Weather />
    </>
  )
};

export default CurrentLocation;

