import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useCurrentPage = () => {
  const location = useLocation();
  const [page, setPage] = useState();

  useEffect(() => {
    const pathnameWithoutSlash = location.pathname.slice(1);
    if (pathnameWithoutSlash) {
      setPage(pathnameWithoutSlash);
      return;
    }
    setPage('rubrics');
  }, [location]);

  return page;
};
