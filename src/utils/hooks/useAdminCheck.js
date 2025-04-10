import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { authContext } from '../contexts/AuthProvider';

const useAdminCheck = () => {
  const { userData, isAuthenticated } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.roles.includes(5150) && isAuthenticated) {
      navigate('/ecocycle/admin/overview');
    } else {
      navigate('/ecocycle')
    }
  }, [userData, isAuthenticated, navigate]);
};

export default useAdminCheck;
