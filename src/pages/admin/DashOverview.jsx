import useResetNav from "../../utils/hooks/useResetNav";
import { Link } from "react-router";
import PointsEarnedGraph from "../../components/ui/admin/overview/PointsEarnedGraph";
import PointsSwappedGraph from "../../components/ui/admin/overview/PointsEarnedGraph";
import SummarySection from "../../components/ui/admin/overview/SummarySection";
import MaterialUsage from "../../components/ui/admin/overview/MaterialUsage";

const DashOverview = () => {

  useResetNav();
  const url = import.meta.env.VITE_API_URL;

  return (
    <main className="flex flex-col gap-3">
      <header>
        <section id="quick_links" className="flex items-center flex-wrap justify-between gap-3">
          <Link className="text-forest font-bold text-nowrap flex-1">Create Record</Link>
          <Link className="text-forest font-bold text-nowrap flex-1">Earn Points</Link>
          <Link className="text-forest font-bold text-nowrap flex-1">Records</Link>
          <Link className="text-forest font-bold text-nowrap flex-1">Swap Item</Link>
          <Link className="text-forest font-bold text-nowrap flex-1">Green Pages</Link>
        </section>
      </header>

      {/* SUMMARY SECTION */}
      <SummarySection url={url}/>

      {/* POINTS EARNED OVERTIME */}
      <section id="charts" className="overflow-x-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <PointsEarnedGraph url={url}/>
          <PointsSwappedGraph url={url}/>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <MaterialUsage url={url}/>
          <PointsSwappedGraph url={url}/>
        </div>
      </section>
    </main>
  )
};

export default DashOverview;