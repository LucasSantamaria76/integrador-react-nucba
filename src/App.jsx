import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { themes } from './styles/themes';
import NavBar from './components/NavBar/NavBar';

import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts } from './redux/slices';
import Layout from './components/Layout/Layout';
import Routes from './routes/Routes';
import { getDBCategories, getDBProducts } from './firebase/firebase-utils';

const App = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    getDBProducts().then((data) => dispatch(getProducts(data)));
    getDBCategories().then((data) => {
      const objCategory = data?.reduce((acc, doc) => {
        acc = { ...acc, [doc.id]: doc.data().subCategory };
        return acc;
      }, {});
      dispatch(getCategories(objCategory));
    });
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <NavBar />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
