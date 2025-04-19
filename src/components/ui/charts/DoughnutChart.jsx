import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const DoughnutChart = ({ labels }) => {

  const backgroundColors = labels.map(() => getRandomColor());

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Age",
        data: labels,
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%",
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Ages in all Farm",
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div className="overflow-x-auto">
      <div className="w-[90%] h-[350px] md:max-w-[500px] flex justify-center">
        <Doughnut data={data} options={options} />;
      </div>
    </div>
  );
};

export default DoughnutChart;
