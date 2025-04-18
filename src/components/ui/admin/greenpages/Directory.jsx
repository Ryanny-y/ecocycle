import React from "react";

const Directory = () => {
  return (
    <div className="bg-white shadow-lg px-5 py-5 rounded-md flex flex-col gap-2">
      <h1 className="text-forest font-bold text-xl">Directory</h1>

      <div id="staff_info_wrapper" className="font-medium flex flex-col gap-2 max-h-[200px] overflow-y-auto">
        <div className="shadow-md shadow-gray-700 p-3 rounded-lg">
          <p>Name: John Doe</p>
          <p>Position: Manager</p>
          <p>Contact No: 0999999999</p>
        </div>
        <div className="shadow-md shadow-gray-700 p-3 rounded-lg">
          <p>Name: John Doe</p>
          <p>Position: Manager</p>
          <p>Contact No: 0999999999</p>
        </div>
        <div className="shadow-md shadow-gray-700 p-3 rounded-lg">
          <p>Name: John Doe</p>
          <p>Position: Manager</p>
          <p>Contact No: 0999999999</p>
        </div>
      </div>
    </div>
  );
};

export default Directory;
