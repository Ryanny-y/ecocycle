import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { authContext } from '../contexts/AuthProvider';

const useAdminCheck = () => {
  const { userData, isAuthenticated } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.userData?.roles.includes(5150) && isAuthenticated) {
      navigate('/admin/overview');
    } else {
      navigate('/')
    }
  }, [userData, isAuthenticated, navigate]);
};

export default useAdminCheck;
