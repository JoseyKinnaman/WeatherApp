import React, {useEffect, useState } from 'react';
import './Weather.css';
import axios from 'axios';

const Weather = ({location, error}) => {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    if(!location){
      setLoading(true);
      return error;
      }
      const lat = location[0];
      const lon = location[1];
    const getWeather = async () => {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
      let temp = data.main.temp;
      let myLocation = data.name;
      let weather = data.weather[0].description
      let currentWeather = [temp, myLocation, weather]
      setLoading(false)
      setWeather(currentWeather)
    }
    getWeather()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[location])

  return(
    <div id ="main" className="ui segment">
      <h2>Weather by Area</h2>
      {loading
      ? <div className="ui active inverted dimmer">
          <div className="ui text loader">
            <p>Loading</p>
          </div>
        </div>
      :
      <div className="ui segment">
        <h3>{weather[1]}</h3>
        <h4>Temp: {weather[0]}°F</h4>
        <h5>{weather[2]}</h5>
        {error}
      </div>
      }
    </div>
  )

}

export default Weather