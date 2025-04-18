import React, { useEffect, useState } from "react";

const Directory = ({ staffList, farmName }) => {

  const [ farmStaff, setFarmStaff ] = useState([]);

  useEffect(() => {
    if(staffList.length > 0) {
      const filteredStaff = staffList.filter(staff => 
        staff.assigned_farm.some(farm => farm.toLowerCase() === farmName.toLowerCase())
      );
      setFarmStaff(filteredStaff)
    }
  }, [ staffList, farmName ])

  return (
    <div className="bg-white shadow-lg px-5 py-5 rounded-md flex flex-col gap-2">
      <h1 className="text-forest font-bold text-xl">Directory</h1>

      <div id="staff_info_wrapper" className="font-medium flex flex-col gap-2 max-h-[200px] overflow-y-auto">

        {farmStaff.length > 0 ? (
          farmStaff.map(staff => (
            <div key={staff._id} className="border border-forest relative z-10 text-black p-3 rounded-lg">
              <p><span class="font-semibold">Name:</span> {staff.name}</p>
              <p><span class="font-semibold">Age:</span> {staff.age}</p>
              <p><span class="font-semibold">Gender:</span> {staff.gender}</p>
              <p><span class="font-semibold">Position:</span> {staff.position}</p>
              <p><span class="font-semibold">Contact No:</span> {staff?.contact_number}</p>
            </div>
          ))
        ) : (
          <p>No Staff Available</p>
        )}
      </div>
    </div>
  );
};

export default Directory;
