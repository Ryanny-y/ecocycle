import { Link } from 'react-router'

const DashNavLink = ({ icon, path }) => {

  return (
    <Link to={`/admin/${path.toLowerCase()}`} className='flex items-center gap-2 outline-none py-4 px-2 rounded-lg hover:bg-opacity-10 hover:bg-white duration-200'>
      {icon}
      <p>{path}</p>
    </Link>
  );
};

export default DashNavLink;
