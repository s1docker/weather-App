import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "13b0989822738cf318cf20e55ddfdb4e";

  let getWeatherInfo = async () => {
    try {
let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonRes = await response.json();
    let data = jsonRes.main;
    let result = {
      city: city,
      temp: data.temp,
      tempMin: data.temp_min,
      tempMax: data.temp_max,
      humidity: data.humidity,
      feelsLike: data.feels_like,
      weather: jsonRes.weather[0].description,
    };
    console.log(result);
    return result;
    }catch(err){
      throw err
    }
    
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try{

      event.preventDefault();
      console.log(city);
      setCity("");
     let newInfo= await getWeatherInfo();
     updateInfo(newInfo)
    }catch(err){
      setError(true)
    }
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>Not found!</p>}
        {handleSubmit}
      </form>
    </div>
  );
}
