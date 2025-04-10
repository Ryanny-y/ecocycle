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
    <nav className="bg-forest w-20 md:w-64 duration-500 h-full py-5 px-4 text-white">
      <Link to="/" className='flex items-center gap-3 mb-10'>
        <img src="/logo.png" alt="EcoCycle Logo" className='h-11'/>
        <h1 className='font-bold text-xl'>EcoCycle</h1>
      </Link>

      <ul className="flex flex-col gap-1">
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
