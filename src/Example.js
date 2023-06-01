import React, { useEffect, useState } from 'react';


function Example() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('Cracow')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchWeatherData()
    setCity('')
  }
  
  const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=1ac648ca88253d60c5f826167094b9d1`)
    .then(response => response.json())
    .then(data => setWeather(data))
  }

  useEffect(() => {
    fetchWeatherData()
  }, [])

  console.log(weather);

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </form>
        <h3>{weather.name}</h3>
        <h3>{weather?.main?.temp}</h3>
        <h3>{weather?.weather?.[0].main}</h3>
        <h3>{weather?.weather?.[0].description}</h3>
        <img 
          alt='Weather icon'
          src={`https://openweathermap.org/img/w/${weather?.weather?.[0].icon}.png`}
        />
    </div>
  );
}

export default Example;
