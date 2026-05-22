import React from 'react'
import SearchBox from './SearchBox'

const WeatherApp = () => {
  return (
    <div className="weather-app-container">
        <h1 className="app-title">Weather App</h1>
        <p className="app-subtitle">By Anuj Vishwakarma</p>
        <SearchBox />
    </div>
  )
}

export default WeatherApp