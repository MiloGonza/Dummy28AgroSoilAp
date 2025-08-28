"use client"
import {GET} from "../../api/openWeather";
import { useEffect} from "react";
import {
    ArcElement,
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function PieWeatherComponent( { setWeatherData, weatherData }: { setWeatherData: (data: any) => void; weatherData: any } ) {

    //Inicializacion
    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await GET(new Request(''));
                const data = await response.json();
                setWeatherData(data);
                console.log(data); // Log the fetched weather data
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        fetchWeather();
        
    }, []);

    // Renderizado condicional
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    console.log(weatherData.main.humidity, "datos de la grafica");
    const pressurePercent = ((weatherData.main.pressure - 950) / (1050 - 950)) * 100;

    // Datos para la grafica
    const data = {
        labels: ["Humedad", "Nubosidad", 'velocidad del viento', 'Presion atmosferica'],
        datasets: [
        {
            label: "Clima (%)",
            data: [weatherData.main.humidity, weatherData.clouds.all, weatherData.wind.speed, pressurePercent],
            backgroundColor: [
                "rgba(15, 59, 86, 0.7)",
                "rgba(21, 101, 192, 0.7)",
                "rgba(51, 86, 50, 0.7)",
                "rgba(255, 112, 67, 0.7)",
            ],
            borderColor: [
                "rgba(15, 59, 86, 1)",
                "rgba(21, 101, 192, 1)",
                "rgba(51, 86, 50, 1)",
                "rgba(255, 112, 67, 1)",
            ],
            borderWidth: 1,
        },
        ],
    };

    const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    datalabels: {
      color: "#000",
      font: {
        weight: "bold",
      },
      formatter: (value: number) => value + " %", // Muestra los %
    },
  },
};

    return (
        <Pie data={data} options={options} />
    );
}

export default PieWeatherComponent;