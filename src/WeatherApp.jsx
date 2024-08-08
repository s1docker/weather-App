import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
    city:"Toronto",
    feelsLike: 24.84,
    temp: 24.84,
    tempMin: 24.84,
    tempMax: 24.84,
    humidity: 80,
    weather: "Rainy",
  });
  let updateInfo=(result)=>{
    setWeatherInfo(result)
  }
  return (
    <div className="appContainer">
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
