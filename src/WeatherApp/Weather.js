import React, { useEffect, useState } from "react";
import "./Weather.css"

const WeatherApp = () => {
    const [city, setCity] = useState('')
    const [value, setValue] = useState({})
    const [open, setOpen] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        dataWeather()
        setOpen(false)
        setCity('')
    }

    const dataWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=1ac648ca88253d60c5f826167094b9d1`)
            .then(response => response.json())
            .then(data => setValue(data))
    }

    useEffect(() => {
        dataWeather()
    }, [])



    return (
        <div>
            <div className="weather-block">
                    <div className="weather-header">
                        <form onSubmit={onSubmit}>
                            <input 
                                type="text"
                                placeholder="Choose your city..."
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                            <button>Search</button>
                        </form>
                    </div>
                    {open 
                        ? 
                            <h1 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '400px'
                                }}
                            >
                                Write your city
                            </h1>
                        :
                        <div>
                            <div className="weather-body">
                        <div className="body-city">
                            <h1 className="city">City: {value?.name}</h1>
                            <h2 className="country">Country: {value?.sys?.country}</h2> 
                        </div>
                        <div className="icon">
                            <img
                                alt='Weather icon'
                                src={`https://openweathermap.org/img/w/${value?.weather?.[0].icon}.png`}
                            />
                        </div>       
                    </div>
                    <div className="weather-footer">
                        <h3><span>Temp:</span>{value?.main?.temp}</h3>
                        <h3><span>Wind-speed:</span>{value?.wind?.speed}</h3>
                        <h3><span>Clouds:</span>{value?.weather?.[0]?.main}</h3>
                    </div>
                        </div>
                        
                    }
                    
            </div>
        </div>
    )
}

export default WeatherApp;