
// project imports
"use client";
import MainCard from 'components/MainCard';
import BarWeatherComponent from 'components/weather/BarWeatherComponent';
import "./DasboardStyle.css";
import { useState } from 'react';
import PieWeatherComponent from 'components/weather/PieWeatherComponent';
import LineGroundComponent from 'components/weather/LineGroundComponent';


// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {

  //Estados
      const [weatherData, setWeatherData] = useState<any>();
      const [soilData, setSoilData] = useState<any>();

  return (
    <div className="dashboardContainer">
      <MainCard title="Temperatura">
        <div className='container'>
            <div className='venezuelaContainer item'>
              <div className='tempContainer'>
                <span className='title'>Temperatura actual {weatherData ? (weatherData.name && 'en ' + weatherData.name) : '...'}</span>
                <span className='temp'>{weatherData ? (weatherData.main.temp - 273.15).toFixed(2) : '...'} °C</span>
              </div>
              <div className='tempContainer'>
                <span className='title'>Sensacion termica {weatherData ? (weatherData.name && 'en ' + weatherData.name) : '...'}</span>
                <span className='temp'>{weatherData ? (weatherData.main.feels_like - 273.15).toFixed(2) : '...'} °C</span>
              </div>
            </div>
            <div className='barWeatherComponentContainer'>
              <BarWeatherComponent setWeatherData={setWeatherData} weatherData={weatherData} />
            </div>
        </div>
      </MainCard>
      <div className='metricCardsContainer'>
        <MainCard title="Humedad">
          <div className='pieWeatherComponentContainer'>
            <PieWeatherComponent setWeatherData={setWeatherData} weatherData={weatherData} />
          </div>
        </MainCard>
        <MainCard title="Perfil de Suelo">
          <div className='lineGroundComponentContainer'>
            <LineGroundComponent setSoilData={setSoilData} soilData={soilData} />
          </div>
        </MainCard>
        <MainCard title="Interpretaciónes">
          <div className='interpretationsContainer'>
          </div>
        </MainCard>
      </div>
    </div>
  );
}
