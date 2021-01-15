import React, {useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({location, error}) => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState("sunny")

  useEffect(() => {
    if(!location){
      setLoading(true);
      return error;
      }
      const lat = location[0];
      const lon = location[1];
    const getWeather = async () => {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=82f159dc001a7193a1e47a71b24e4e30`)
      let temp = data.main.temp;
      let myLocation = data.name;
      let weather = data.weather[0].description
      let currentWeather = [temp, myLocation, weather]
      setLoading(false)
      setWeather(currentWeather)
    }
    getWeather()
  },[location, error])

  return(
    <div className="ui segment">
      <h3>Weather by Area</h3>
      {loading
      ? <div className="ui active inverted dimmer">
          <div className="ui text loader">
            <p>Click the Current Weather button to see weather in your area!</p>
          </div>
        </div>
      :
      <div className="ui segment">
        <h3>{weather[1]}</h3>
        <h4>Temp: {weather[0]} f</h4>
        <h5>{weather[2]}</h5>
      </div>
      }
    </div>
  )

}

export default Weather