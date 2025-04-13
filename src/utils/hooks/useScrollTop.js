import { useLocation } from "react-router";
import { useEffect } from "react";

const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
};

export default useScrollTop;
