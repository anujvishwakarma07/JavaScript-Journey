import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ShowBox from './ShowBox';
const SearchBox = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "6250a8f2e0c669f6d6961e611ee93a88";

    // const getWeatherInfo = async () => {
    //     const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    //     const jsonResponse = await response.json();
    //     console.log(jsonResponse);

    //     const requiredWeather = {
    //         city: jsonResponse.name,
    //         temp: jsonResponse.main.temp,
    //         tempMax: jsonResponse.main.temp_max,
    //         tempMin: jsonResponse.main.temp_min,
    //         humidity: jsonResponse.main.humidity,
    //         feelsLike: jsonResponse.main.feels_like,
    //         description: jsonResponse.weather[0].description,
    //     }
    //     return requiredWeather;
    // }

    const getWeatherInfo = async (serchCity) => {
        const response = await fetch(`${API_URL}?q=${serchCity}&appid=${API_KEY}&units=metric`);
        const jsonResponse = await response.json();
        const requiredWeather = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            description: jsonResponse.weather[0].description,
        };
        return requiredWeather;
    }

    useEffect(
        () => {
            const getInitialData = async () => {
                const Info = await getWeatherInfo("Kanpur");
                setWeatherData(Info);
            };
            getInitialData();
        }, []
    );



    const handleFormData = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newInfo = await getWeatherInfo(city);
        setWeatherData(newInfo);
        setCity("");
    }

    return (
        <div style={{ width: '100%' }}>
            <form action="" onSubmit={handleSubmit} className="search-form">
                <TextField 
                    id="cityName" 
                    label="City Name" 
                    name='cityName' 
                    variant="outlined" 
                    value={city} 
                    onChange={handleFormData} 
                    required 
                    className="search-input"
                    fullWidth
                />
                <Button variant="contained" type='submit' className="search-btn" fullWidth>
                    Search
                </Button>
            </form>

            {weatherData ? <ShowBox weatherData={weatherData} /> : null}
        </div>
    )
}

export default SearchBox