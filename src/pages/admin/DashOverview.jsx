import useResetNav from "../../utils/hooks/useResetNav";
import { Link } from "react-router";
import { AiOutlineRise } from "react-icons/ai";
import PointsEarnedGraph from "./overview/PointsEarnedGraph";

const DashOverview = () => {

  // AIzaSyBgQnf_N6ZCRjv-sg33Qh11OYH_8dWuitU
  useResetNav();

  const url = import.meta.env.VITE_API_URL;

  return (
    <main className="flex flex-col gap-3">
      <header>
        <section id="quick_links" className="grid grid-cols-2 gap-2">
          <Link className="bg-blue-200">Create Record</Link>
          <Link className="bg-blue-200">Earn Points</Link>
          <Link className="bg-blue-200">Records</Link>
          <Link className="bg-blue-200">Swap Item</Link>
          <Link className="bg-blue-200">Green Pages</Link>
        </section>
      </header>

      <section id="summary" className="grid grid-cols-2 gap-3">
        <div id="summary_box" className="flex flex-col justify-between px-3 py-2 bg-[#268833] text-white min-h-[120px] rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Total Records</h1>
            <AiOutlineRise className="w-5 text-xl"/>
          </div>

          <div className="flex justify-between items-end">
            <h1 className="font-bold text-3xl">86</h1>
            <h1>+11</h1>
          </div>
        </div>
        <div id="summary_box" className="flex flex-col justify-between px-3 py-2 bg-[#268833] text-white min-h-[120px] rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Total Points Earned</h1>
            <AiOutlineRise className="w-5 text-xl"/>
          </div>

          <div className="flex justify-between items-end">
            <h1 className="font-bold text-3xl">86</h1>
            <h1>+11</h1>
          </div>
        </div>
        <div id="summary_box" className="flex flex-col justify-between px-3 py-2 bg-[#268833] text-white min-h-[120px] rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Total Points Swapped</h1>
            <AiOutlineRise className="w-5 text-xl"/>
          </div>

          <div className="flex justify-between items-end">
            <h1 className="font-bold text-3xl">86</h1>
            <h1>+11</h1>
          </div>
        </div>
        <div id="summary_box" className="flex flex-col justify-between px-3 py-2 bg-[#268833] text-white min-h-[120px] rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Total Products</h1>
            <AiOutlineRise className="w-5 text-xl"/>
          </div>

          <div className="flex justify-between items-end">
            <h1 className="font-bold text-3xl">86</h1>
            <h1>+11</h1>
          </div>
        </div>
      </section>

      {/* POINTS EARNED OVERTIME */}
      <section id="charts" className="overflow-x-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <PointsEarnedGraph url={url}/>
          <PointsEarnedGraph url={url}/>
        </div>
          
      </section>

    </main>
  )
};

export default DashOverview;