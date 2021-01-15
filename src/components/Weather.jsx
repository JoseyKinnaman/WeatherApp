import React, {useEffect} from 'react';

const Weather = ({location}) => {
  

  useEffect(() => {
    if(!location){
      alert('Loading...');
      // loading hook?
      return;
      }
      const lat = location[0];
      const lon = location[1];
    async function getWeather(){
      const response = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&${lon}&appid=${process.env.REACT_APP_API_KEY}`)
      const body = await response.json();
      console.log(response.json)
    }
    getWeather()
  },[location])

  return(
    <div className="">

    </div>
  )

}

export default Weather