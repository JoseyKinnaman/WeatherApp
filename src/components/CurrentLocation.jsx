import {useState} from 'react';
import Weather from './Weather';


const CurrentLocation = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();
  const [showWeather, setShowWeather] = useState(false);

  const getLocation = async () => {
    const { geolocation } = navigator;

    if(!geolocation){
      setError('Gelocation is not supported.');
      return;
      }
      geolocation.getCurrentPosition(handleSuccess,handleError);
    }

    const handleSuccess = position => {
      const {latitude, longitude } = position.coords
      setLocation([latitude,longitude]);
      setShowWeather(true);
    };
    const handleError = error => {
      setError(error.message);
    };

  return (
    <>
      <button
        onClick={getLocation}
        className="ui primary button"
      >
        Current Weather
      </button>
      { showWeather
        ?
        <Weather
        location={location}
        error={error}
      />
      : null}
    </>
  )
};

export default CurrentLocation;

