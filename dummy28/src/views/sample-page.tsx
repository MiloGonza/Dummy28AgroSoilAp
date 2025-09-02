// project imports
'use client';
import MainCard from 'components/MainCard';
import BarWeatherComponent from 'components/weather/BarWeatherComponent';
import './DasboardStyle.css';
import { useState } from 'react';
import PieWeatherComponent from 'components/weather/PieWeatherComponent';
import LineGroundComponent from 'components/weather/LineGroundComponent';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  //Estados
  const [weatherData, setWeatherData] = useState<any>();
  const [soilData, setSoilData] = useState<any>();
  const [Interpretations, setInterpretations] = useState<any>();

  return (
    <div className="dashboardContainer">
      <div className="topCardsContainer">
        <div className="dataCard">Ph del suelo: {soilData ? soilData.properties.layers[7].depths[0].values.mean / 10 : '...'}</div>
        <div className="dataCard">Nitrogeno total: {soilData ? soilData.properties.layers[4].depths[0].values.mean + ' g/kg' : '...'}</div>
        <div className="dataCard">
          Carbono organico del suelo: {soilData ? soilData.properties.layers[10].depths[0].values.mean + ' g/kg' : '...'}
        </div>
      </div>
      <MainCard title="Temperatura">
        <div
          className="container"
          onMouseEnter={() => {
            setInterpretations('Clima');
          }}
          onMouseLeave={() => {
            setInterpretations('');
          }}
        >
          <div className="venezuelaContainer item">
            <div className="tempContainer">
              <span className="title">Temperatura actual {weatherData ? weatherData.name && 'en ' + weatherData.name : '...'}</span>
              <span className="temp">{weatherData ? (weatherData.main.temp - 273.15).toFixed(2) : '...'} °C</span>
            </div>
            <div className="tempContainer">
              <span className="title">Sensacion termica {weatherData ? weatherData.name && 'en ' + weatherData.name : '...'}</span>
              <span className="temp">{weatherData ? (weatherData.main.feels_like - 273.15).toFixed(2) : '...'} °C</span>
            </div>
          </div>
          <div className="barWeatherComponentContainer">
            <BarWeatherComponent setWeatherData={setWeatherData} weatherData={weatherData} />
          </div>
        </div>
      </MainCard>
      <div className="metricCardsContainer">
        <MainCard title="Humedad">
          <div
            className="pieWeatherComponentContainer"
            onMouseEnter={() => {
              setInterpretations('Humedad');
            }}
            onMouseLeave={() => {
              setInterpretations('');
            }}
          >
            <PieWeatherComponent setWeatherData={setWeatherData} weatherData={weatherData} />
          </div>
        </MainCard>
        <MainCard title="Perfil de Suelo">
          <div
            className="lineGroundComponentContainer"
            onMouseEnter={() => {
              setInterpretations('Perfil de Suelo');
            }}
            onMouseLeave={() => {
              setInterpretations('');
            }}
          >
            <LineGroundComponent setSoilData={setSoilData} />
          </div>
        </MainCard>
        <MainCard title="Interpretaciónes">
          <div className="interpretationsContainer">
            {!Interpretations ? (
              <div className="noInterpretations">
                <p>
                  Para ver las interpretaciones ubique el <b className="primaryColor">cursor </b> sobre una de las{' '}
                  <b className="primaryColor">graficas</b>
                </p>
              </div>
            ) : Interpretations === 'Clima' ? (
              <p>
                La gráfica de barras horizontales presenta las distintas medidas de temperatura registradas
                {weatherData ? weatherData.name && ' en ' + weatherData.name : ' ...'}, incluyendo la temperatura actual, la sensación
                térmica, así como los valores mínimos y máximos. Cada barra refleja la magnitud de cada variable, permitiendo comparar de
                manera visual y rápida las diferencias entre ellas y observar cuál de estas medidas se encuentra en un rango más alto o más
                bajo dentro del contexto climático del lugar.
              </p>
            ) : Interpretations === 'Humedad' ? (
              <p>
                La gráfica de torta muestra la proporción relativa de distintas variables atmosféricas, donde cada sección representa la
                contribución de un componente específico. Esta visualización permite identificar de manera inmediata cuál de las variables
                tiene mayor presencia y facilita la comparación entre ellas, evidenciando la distribución porcentual de elementos como
                humedad, nubosidad, velocidad del viento y presión atmosférica.
              </p>
            ) : (
              <p>
                La gráfica muestra la variación de la proporción de arena, limo y arcilla en el suelo a distintas profundidades, con cada
                línea representando uno de estos componentes expresados en porcentaje. Los cambios en la dirección y los cruces de las
                curvas reflejan la composición relativa del suelo en las diferentes capas, mientras que el rango y la estabilidad de cada
                fracción indican la naturaleza del perfil textural presente.
              </p>
            )}
          </div>
        </MainCard>
      </div>
    </div>
  );
}
