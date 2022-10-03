import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, Container, Header, Input, Navbar } from './components';
import GlobalStyles from './styles/GlobalStyles';
import { themes } from './styles/themes';
import Routes from './routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts, setCart, setCurrentUser, setFavorites, setOrders } from './redux/slices';
import {
  auth,
  getDBCart,
  getDBCategories,
  getDBFavoritos,
  getDBOrders,
  getDBProducts,
  getOrCreateUserProfile,
  getUser,
} from './firebase/firebase-utils';
import { onAuthStateChanged } from 'firebase/auth';

const onAuthChange = (dispatch, action) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const snapshot = await getOrCreateUserProfile(user);
      getUser(snapshot.id).then((data) => dispatch(action(data)));
      getDBFavoritos(user.uid).then((data) => {
        dispatch(setFavorites(data));
      });
      getDBCart(user.uid).then((data) => {
        dispatch(setCart(data));
      });
      getDBOrders().then((data) => {
        dispatch(setOrders(data));
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
      <Header />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
