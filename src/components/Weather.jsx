import React, {useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({location}) => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState("sunny")

  useEffect(() => {
    if(!location){
      setLoading(true);
      return;
      }
      const lat = location[0];
      const lon = location[1];
    const getWeather = async () => {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=82f159dc001a7193a1e47a71b24e4e30`)
      console.log(data)
      setLoading(false)
    }
    getWeather()
  },[location])

  return(
    <div className="ui segment">
      <h3>Weather by Area</h3>
      {loading
      ? <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      :
      <div className="">
        <h4>Hello</h4>
      </div>
      }
    </div>
  )

}

export default Weather