"use client"
import {GET} from "../../api/openWeather";
import { useEffect} from "react";
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarWeatherComponent( { setWeatherData, weatherData }: { setWeatherData: (data: any) => void; weatherData: any } ) {

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

    // Datos para la grafica
    const data = {
    labels: ["Actual", "Sensación", "Mínima", "Máxima"],
    datasets: [
        {
            label: "Temperatura (°C)",
            data: [weatherData.main.temp, weatherData.main.feels_like, weatherData.main.temp_min, weatherData.main.temp_max],
            backgroundColor: [
                "rgba(15, 59, 86, 0.7)",
                "rgba(21, 101, 192, 0.7)",
                "rgba(0, 172, 193, 0.7)",
                "rgba(255, 112, 67, 0.7)",
            ],
        },
    ],
    };

    console.log(weatherData, "datos de la grafica");

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y" as const, // horizontal
        plugins: {
        legend: { display: false },
        title: {
            display: true,
            text: `Clima ${weatherData.name && 'en ' + weatherData.name}`,
            },
        },
    };


    return (
        <Bar data={data} options={options} />
    );
}

export default BarWeatherComponent;