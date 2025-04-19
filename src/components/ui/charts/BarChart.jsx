// components/BarChart.js
import { Bar } from 'react-chartjs-2';
import useWindowResize from '../../../utils/hooks/useWindowResize';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ labels, data, title }) => {

  const windowSize = useWindowResize();

  const fontSize = windowSize < 768 ? 10 : 14;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(23, 206, 66, 0.6)',
          'rgba(215, 126, 86, 0.6)',
          'rgba(160, 50, 226, 0.6)',
          'rgba(120, 56, 26, 0.6)',
        ],
        borderWidth: 1
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 13,
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          precision: 2,
        },
        grid: {
          lineWidth: 1,
        },
      },
      x: {
        ticks: {
          display: true,
          font: {
            size: fontSize
          }
        },
      },
    },
  };

  return (
    <div className="overflow-x-auto">
      <div className="w-[90%] h-[350px] md:max-w-[500px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
