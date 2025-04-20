import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import getRandomColor from "../../../utils/helpers/getRandomColor";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, dataTitle, title, dataVal }) => {

  const backgroundColors = labels.map(() => getRandomColor());
  console.log(backgroundColors);
  

  const data = {
    labels,
    datasets: [
      {
        label: dataTitle || title,
        data: dataVal,
        backgroundColor: backgroundColors,
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
        text: title,
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div className="overflow-x-auto flex-1">
      <div className="w-[90%] h-[350px] md:max-w-[500px] flex justify-center">
        <Pie data={data} options={options} />;
      </div>
    </div>
  );
};

export default PieChart;
