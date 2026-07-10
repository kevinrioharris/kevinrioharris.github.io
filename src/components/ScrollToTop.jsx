import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.state]);

  return null;
};

export default ScrollToTop;
