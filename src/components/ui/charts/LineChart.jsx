import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ datas, graphTitle }) => {

  const labels = datas.map(obj => Object.values(obj)[0]);
  const dataVal = datas.map(obj => Object.values(obj)[1]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Points',
        data: dataVal,
        backgroundColor: 'rgba(53, 162, 235)'
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: graphTitle
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          precision: 2,
        },
        grid: {
          lineWidth: 1,
        },
      },
    }
  }

  return (
    <div className="overflow-x-auto flex-1">
      <div className="min-w-[300px] h-[350px] flex justify-center">
        <Line data={data} options={options} />;
      </div>
    </div>
  )
};

export default LineChart;
