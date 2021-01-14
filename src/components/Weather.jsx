import React, {useEffect} from 'react';

const Weather = ({location}) => {
  console.log(location)
  

  useEffect(() => {
    if(!location){
      alert('Loading...');
      // loading hook?
      return;
      }
    async function getWeather(){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${location[0]}&lon=${location[1]}&appid=${process.env.REACT_APP_API_KEY}`)
      // const body = await response.json();
      console.log(response)
    }
    getWeather()
  },[location])

  return(
    <div className="">

    </div>
  )

}

export default Weather