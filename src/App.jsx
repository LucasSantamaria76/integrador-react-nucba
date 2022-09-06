import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { themes } from './styles/themes';
import NavBar from './components/NavBar/NavBar';

import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts, setCart, setCurrentUser, setFavorites } from './redux/slices';
import Layout from './components/Layout/Layout';
import Routes from './routes/Routes';
import {
  auth,
  getDBCart,
  getDBCategories,
  getDBFavoritos,
  getDBProducts,
  getOrCreateUserProfile,
} from './firebase/firebase-utils';
import { onAuthStateChanged } from 'firebase/auth';

const onAuthChange = (dispatch, action) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const snapshot = await getOrCreateUserProfile(user);
      localStorage.setItem('username', JSON.stringify(user));
      dispatch(action({ id: snapshot.id, ...snapshot.data() }));

      getDBFavoritos(user.uid).then((data) => {
        dispatch(setFavorites(data));
      });
      getDBCart(user.uid).then((data) => {
        dispatch(setCart(data));
      });
    } else {
      dispatch(action(null));
    }
  });
};

const App = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthChange(dispatch, setCurrentUser);

    getDBProducts().then((data) => dispatch(getProducts(data)));

    getDBCategories().then((data) => {
      const objCategory = data?.reduce((acc, doc) => {
        acc = { ...acc, [doc.id]: doc.data().subCategory };
        return acc;
      }, {});
      dispatch(getCategories(objCategory));
    });
    return () => unsuscribe();
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
