import BarChart from "../../charts/BarChart";
import DoughnutChart from "../../charts/DoughnutChart";
import PieChart from '../../charts/PieChart'

const Statistics = ({ staffList }) => {
  // For Staff Count
  const staffLabel = ['MWSS Service Road', 'Silvina Eco Park', 'Mendoza Urban Farm'];
  const farmCounts = staffLabel.map(farmName => {
    const count = staffList.filter(staff =>
      staff.assigned_farm.some(farm => farm.toLowerCase() === farmName.toLowerCase())
    ).length;
    return count;
  });
  
  const allSkills = [...new Set(staffList.flatMap(staff => staff.skills))];
  const skillCount = allSkills.map(skillName => {
    const count = staffList.filter(staff => 
      staff.skills.some(skill => skill.toLowerCase() === skillName.toLowerCase())
    ).length;
    return count;
  });

  const allAges = staffList.map(staff => staff.age);
  
  const genderCounts = staffList.reduce((acc, staff) => {
    const gender = staff.gender.toLowerCase();

    if(gender === 'male') acc[0]++;
    else if (gender === 'female') acc[1]++;
    return acc;
  }, [0, 0])

  return (
    <div className="shadow-lg px-5 py-5 rounded-md flex flex-col gap-2 bg-white">
      <h1 className="text-forest font-bold text-xl">Statistics</h1>

      {staffList && 
        <div className="flex flex-col">
        <BarChart labels={staffLabel} data={farmCounts} title={"Member Each Farm"}/>
        <BarChart labels={allSkills} data={skillCount} title={"Skills Count"}/>
        <DoughnutChart staffList={staffList} />
        <PieChart labels={["Male", "Female"]} title="Genders" dataVal={genderCounts} />
      </div>
      } 
    </div>
  )
};

export default Statistics;