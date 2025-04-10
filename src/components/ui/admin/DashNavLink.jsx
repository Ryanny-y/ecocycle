import { Link } from 'react-router'

const DashNavLink = ({ icon, path }) => {

  return (
    <Link to={`/admin/${path.toLowerCase()}`} className='flex items-center justify-start gap-2 overflow-hidden outline-none rounded-lg hover:bg-opacity-10 hover:bg-white duration-200 py-2'>
     {icon}
      <p>{path}</p>
    </Link>
  );
};

export default DashNavLink;
