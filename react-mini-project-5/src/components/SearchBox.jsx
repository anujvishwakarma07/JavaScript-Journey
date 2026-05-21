import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const SearchBox = () => {
    const [city, setCity] = useState("")

    const API_URL = "http://api.openweathermap.org/geo/1.0/direct"
    const API_KEY = "6250a8f2e0c669f6d6961e611ee93a88";

    const getWhetherInfo = async () => {
        const response  = await fetch(`${API_URL}?q=${city}&limit=${1}&appid=${API_KEY}`);

        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }

    const handleFormData = (event) => {
        setCity(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        getWhetherInfo();
    }
    return (
        <div>
            <h1 style={{textAlign: "center" }}>Whether App</h1>
            <br />
            <form action="" onSubmit={handleSubmit} style={{display : "flex", justifyContent : "center", alignItems : "center", gap : "30px", flexDirection : "column"}}>
                <TextField id="cityName" label="City Name" name='cityName' variant="outlined" value={city} onChange={handleFormData} required />
                <Button variant="outlined" type='submit'>Search</Button>
            </form>
        </div>
    )
}

export default SearchBox