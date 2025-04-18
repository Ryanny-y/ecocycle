import React from "react";
import useResetNav from "../../utils/hooks/useResetNav";
import { Link } from "react-router";

const DashOverview = () => {

  // AIzaSyBgQnf_N6ZCRjv-sg33Qh11OYH_8dWuitU
  useResetNav();

  return (
    <main>
      <header>
        <section id="quick_links" className="grid grid-cols-2 gap-2">
          <Link className="bg-blue-200">Create Record</Link>
          <Link className="bg-blue-200">Earn Points</Link>
          <Link className="bg-blue-200">Records</Link>
          <Link className="bg-blue-200">Swap Item</Link>
          <Link className="bg-blue-200">Green Pages</Link>
        </section>

        <section id="summary">

        </section>
      </header>

    </main>
  )
};

export default DashOverview;
