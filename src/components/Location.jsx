import React, {useState, useEffect} from 'react';
import Weather from './Weather';

const Location = () => {
  const [location, setLocation] = useState('Portland');
return(
  <div>
  <div className="ui form">
    <div className="field">
      <label>
        <input
          type="text"
          className="input"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </label>
    </div>
    {location}
  </div>
    < Weather
    location={location}
    />
  </div>
)
}

export default Location