import { useEffect, useState } from 'react';

export const useResize = () => {
  const [isPhone, setIsPhone] = useState(window.innerWidth < 500 ? true : false);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 900 ? true : false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900 ? true : false);
  const [posMenuUser, setPosMenuUser] = useState(null);

  const handleResize = () => {
    window.innerWidth < 500 ? setIsPhone(true) : setIsPhone(false);
    window.innerWidth < 900 ? setIsTablet(true) : setIsTablet(false);
    window.innerWidth > 899 ? setIsDesktop(true) : setIsDesktop(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return { isPhone, isDesktop, isTablet, posMenuUser };
};
