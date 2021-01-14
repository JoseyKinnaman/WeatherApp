import React, {useState, useEffect} from 'react';
import Weather from './Weather';

const Location = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  useEffect(() =>{
    if(!navigator.geolocation){
      setError('Gelocation is not support.');
      return;
    }
    }
  })

return(
  <div>
    <div>
        <button
          type="button">Show My Location</button>
    </div>
    < Weather/>
  </div>
)
}

export default Location