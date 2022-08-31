import React, { useState } from "react";
import './App.css'
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import Particle from './particle'




export const WeatherIcons = {
  "01d": "./icons/sunny.png",
  "01n": "./icons/night.png",
  "02d": "./icons/day.png",
  "02n": "./icons/cloudy-night.png",
  "03d": "./icons/cloudy.png",
  "03n": "./icons/cloudy.png",
  "04d": "./icons/perfect-day.png",
  "04n": "./icons/cloudy-night.png",
  "09d": "./icons/rain.png",
  "09n": "./icons/rain-night.png",
  "10d": "./icons/rain.png",
  "10n": "./icons/rain-night.png",
  "11d": "./icons/storm.png",
  "11n": "./icons/storm.png",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
  z-index: 9999;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  


  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <div>
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
     </Container>
     
     <Particle className='particle' />
    
     <div></div>
     </div>
  );
}

export default App;
