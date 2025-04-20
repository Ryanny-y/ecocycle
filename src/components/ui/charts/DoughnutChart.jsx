import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import getRandomColor from "../../../utils/helpers/getRandomColor";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ staffList }) => {

  const ageMap = staffList.reduce((acc, staff) => {
    const age = staff.age;
    acc[age] = (acc[age] || 0) + 1;
    return acc;
  }, {});

  const values = Object.values(ageMap); // counts per age
  const labels = Object.keys(ageMap); // ages

  const backgroundColors = labels.map(() => getRandomColor());

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Age",
        data: values,
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
