import { useState } from "react";
import CreateRecord from "../../components/ui/admin/CreateRecord";

const UserDash = () => {

  const [ showCreateRecord, setShowCreateRecord ] = useState(false);
  

  return (
    <section id="user_dashboard">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold text-2xl tracking-wide">Records</h1>

        <button className="bg-forest hover:bg-opacity-90 rounded-md duration-400 text-white py-2 px-4" onClick={() => {
          setShowCreateRecord(true);
        }}>
          Create New Record
        </button>
      </div>

      <div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>All (14)</li>
            <li>Newest (15)</li>
          </ul>
        </nav>

        <table className="w-full border-separate border-spacing-y-0">
          <thead>
            <tr>
              <th className="text-start py-4">User Id</th>
              <th className="">Name</th>
              <th className="">Created on</th>
              <th className="">Contact</th>
              <th className="">Points</th>
              <th className="">Transactions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="even:bg-white">
              <td className="text-start py-2">U001</td>
              <td className="text-center">John Doe</td>
              <td className="text-center">C1234</td>
              <td className="text-center">P5678</td>
              <td className="text-center">T9876</td>
              <td className="text-center">T9876</td>
            </tr>
            <tr className="even:bg-white">
              <td className="text-start py-2">U001</td>
              <td className="text-center">John Doe</td>
              <td className="text-center">C1234</td>
              <td className="text-center">P5678</td>
              <td className="text-center">T9876</td>
              <td className="text-center">T9876</td>
            </tr>
            <tr className="even:bg-white">
              <td className="text-start py-2">U001</td>
              <td className="text-center">John Doe</td>
              <td className="text-center">C1234</td>
              <td className="text-center">P5678</td>
              <td className="text-center">T9876</td>
              <td className="text-center">T9876</td>
            </tr>
            <tr className="even:bg-white">
              <td className="text-start py-2">U001</td>
              <td className="text-center">John Doe</td>
              <td className="text-center">C1234</td>
              <td className="text-center">P5678</td>
              <td className="text-center">T9876</td>
              <td className="text-center">T9876</td>
            </tr>
          </tbody>
        </table>

        <CreateRecord showCreateRecord={showCreateRecord} setShowCreateRecord={setShowCreateRecord} />
      </div>
    </section>
  );
};

export default UserDash;
