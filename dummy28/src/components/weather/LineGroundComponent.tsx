'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

import { GET } from '../../api/soilGrids';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineGroundComponent({ setSoilData }: { setSoilData?: (data: any) => void }) {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    async function fetchSoilData() {
      try {
        const response = await GET();
        const data = await response.json();
        setSoilData && setSoilData(data);
        console.log(data, 'datos del suelo');

        // Buscar capas de textura
        const sandLayer = data.properties.layers.find((l: any) => l.name === 'sand');
        const siltLayer = data.properties.layers.find((l: any) => l.name === 'silt');
        const clayLayer = data.properties.layers.find((l: any) => l.name === 'clay');

        const labels = sandLayer.depths.map((d: any) => d.label);

        // Convertir de g/kg → %
        const sandValues = sandLayer.depths.map((d: any) => d.values.mean / 10);
        const siltValues = siltLayer.depths.map((d: any) => d.values.mean / 10);
        const clayValues = clayLayer.depths.map((d: any) => d.values.mean / 10);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Arena (%)',
              data: sandValues,
              borderColor: 'rgba(255,193,7,1)',
              backgroundColor: 'rgba(255,193,7,0.5)',
              tension: 0.3
            },
            {
              label: 'Limo (%)',
              data: siltValues,
              borderColor: 'rgba(76,175,80,1)',
              backgroundColor: 'rgba(76,175,80,0.5)',
              tension: 0.3
            },
            {
              label: 'Arcilla (%)',
              data: clayValues,
              borderColor: 'rgba(33,150,243,1)',
              backgroundColor: 'rgba(33,150,243,0.5)',
              tension: 0.3
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching soil data:', error);
      }
    }

    fetchSoilData();
  }, [setSoilData]);

  if (!chartData) return <div>Cargando gráfico...</div>;

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Arena, Limo y Arcilla por Profundidad'
      }
    },
    scales: {
      y: {
        min: 20, // en lugar de 0
        max: 40, // en lugar de 100
        title: { display: true, text: 'Composición (%)' }
      }
    }
  };

  return <Line data={chartData} options={options} />;
}

export default LineGroundComponent;
