import React, { useEffect, useState } from "react";

const SkillMap = ({ staffList, farmName }) => {
  const [farmStaff, setFarmStaff] = useState([]);

  useEffect(() => {
    if (staffList.length > 0) {
      const filteredStaff = staffList.filter((staff) =>
        staff.assigned_farm.some(
          (farm) => farm.toLowerCase() === farmName.toLowerCase()
        )
      );
      setFarmStaff(filteredStaff);
    }
  }, [staffList, farmName]);

  return (
    <div className="shadow-lg px-5 py-5 rounded-md flex flex-col gap-2 bg-white">
      <h1 className="text-forest font-bold text-xl">Skill Map</h1>

      <div
        id="profile_info"
        className="font-medium flex flex-col gap-2 max-h-[65svh] overflow-y-auto"
      >
        {farmStaff.length > 0 ? (
          farmStaff.map((staff) => (
            <div
              key={staff._id}
              className="border border-forest relative z-10 text-black p-3 rounded-lg"
            >
              <p><span class="font-bold text-forest">Name:</span> {staff.name}</p>
              <p><span class="font-bold text-forest">Skill:</span> {staff.skills.join(', ')}</p>
              <p><span class="font-bold text-forest">Farm:</span> {staff.assigned_farm.join(', ')}</p>
              <p><span class="font-bold text-forest">Contact No:</span> {staff?.contact_number}</p>
            </div>
          ))
        ) : (
          <p>No Staff Available</p>
        )}
      </div>
    </div>
  );
};

{
  /* <p>Name: </p>
<p>Skill: </p>
<p>Farm: </p>
<p>Contact No: </p> */
}

export default SkillMap;
