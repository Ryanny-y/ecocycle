import { Link } from 'react-router'

const DashNavLink = ({ path }) => {

  return (
    <Link to={path.path} className='flex items-center justify-start gap-2 overflow-hidden outline-none rounded-lg hover:bg-opacity-10 hover:bg-white duration-200 py-2'>
     {path.icon}
      <p>{path.path_name}</p>
    </Link>
  );
};

export default DashNavLink;
