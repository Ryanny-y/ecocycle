import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ dataVal }) => {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender",
        data: dataVal,
        backgroundColor: ["#1E90FF", "#FF69B4"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "0%",
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Genders",
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div className="overflow-x-auto">
      <div className="w-[90%] h-[350px] md:max-w-[500px] flex justify-center">
        <Pie data={data} options={options} />;
      </div>
    </div>
  );
};

export default PieChart;
