import BarChart from "../../charts/BarChart";

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
  
  return (
    <div className="shadow-lg px-5 py-5 rounded-md flex flex-col gap-2 bg-white">
      <h1 className="text-forest font-bold text-xl">Statistics</h1>

      <div className="">
        <BarChart labels={staffLabel} data={farmCounts} title={"Member Each Farm"}/>
        <BarChart labels={allSkills} data={skillCount} title={"Skills Count"}/>
      </div>
    </div>
  )
};

export default Statistics;