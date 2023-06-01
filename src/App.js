import React, { useState } from 'react';
import './App.css';
import WeatherApp from './WeatherApp/Weather';
import Loader from './WeatherApp/Loader';

function App() {
  const [showApp, setShowApp] = useState(true)

  setTimeout(() => {
    setShowApp(false)
  }, 2000)


  return (
    <div className="App">
        {showApp 
            ? 
              <Loader />
            :
              <WeatherApp />
        }
    </div>
  );
}

export default App;
