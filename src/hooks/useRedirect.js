import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useRedirect = (path) => {
  const { isLogged } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate(path);
    }
  }, [isLogged, navigate, path]);
};
