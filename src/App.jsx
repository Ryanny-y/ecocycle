import MainHeader from './components/common/main/MainHeader';
import MainFooter from './components/common/main/MainFooter';
import { Outlet } from 'react-router';

const App = () => {

  return (
    <>
      <MainHeader />
      <main className='flex flex-col gap-10'>
        <Outlet />
        <MainFooter />
      </main>
    </>
  );
};

export default App;
