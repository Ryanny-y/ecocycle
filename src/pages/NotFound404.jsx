import MainHeader from '../components/common/main/MainHeader'
import MainFooter from '../components/common/main/MainFooter'
import { Link } from 'react-router';

const NotFound404 = () => {
  return (
    <>
      <MainHeader/>
        <main className='container mx-auto flex flex-col items-center justify-center gap-4 h-[80svh] text-center'>
          <h1 className='font-bold text-3xl md:text-5xl mb-3 text-red-700'>Page not found.</h1>

          <p className='font-medium md:text-lg'>Sorry, the page you’re looking for doesn’t exist or has been moved.</p>

          <Link to='/' className='text-forest md:text-lg'>Go back to home page</Link>
        </main>
      <MainFooter />
    </>
  )
};

export default NotFound404;
