import { useState } from "react";
import DashNavLink from "../../ui/admin/DashNavLink";
import { Link } from "react-router";

const DashSideNav = () => {
  
  const paths = [
    {
      icon: <box-icon box-icon type='solid' name='dashboard' color="white" size="sm"></box-icon>,
      path_name: 'Overview'
    },
    {
      icon: <box-icon box-icon type='solid' name='group' color="white" size="sm"></box-icon>,
      path_name: 'Users'
    },
    {
      icon: <box-icon name='transfer-alt' color="white" size="sm"></box-icon>,
      path_name: 'Transactions'
    },
    {
      icon: <box-icon type='solid' name='package' color="white" size="sm"></box-icon>,
      path_name: 'Products'
    },
    
  ]

  return (
    <nav className={`overflow-hidden ease-in-out md:w-64 bg-forest duration-500 py-5 px-4 text-white sticky top-0 h-svh self-start`}>
      <div className='flex items-center gap-3 mb-10 justify-between'>
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="EcoCycle Logo" className='h-11'/>
          <h1 className='font-bold text-xl'>EcoCycle</h1>
        </Link>
      </div>

      <ul className="flex flex-col gap-4">
        {paths.map(path => (
          <li key={path.path_name}>
            <DashNavLink path={path.path_name} icon={path.icon}/>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashSideNav;
