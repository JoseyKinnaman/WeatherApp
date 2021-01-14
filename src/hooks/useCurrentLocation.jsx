import {useState, useEffect} from 'react';


const useCurrentLocation = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  const handleSuccess = position => {
    const {latitude, longitide } = position.coords;

    setLocation({latitude, longitide});
  };

  const handleError = error => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;
    if(!geolocation){
      setError('Gelocation is not support.');
      return;
      }

      geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

  return {location, error}
};

export default useCurrentLocation;

