import React from "react";
import './Loader.css'

const Loader = () => {
    return (
      <div>
          <h1>Welcome in my Weather App</h1>
          <p>App is loading....</p>
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }

  export default Loader;