import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { addProductToCart, reduceStockProduct, removeProductToCart, restoreStockProduct } from '../../redux/slices';
=======
import { ButtonFav, MainContainer } from '../../components/common';
import {
  addProductToCart,
  hideMenus,
  reduceStockProduct,
  removeProductToCart,
  restoreStockProduct,
} from '../../redux/slices';
>>>>>>> refs/remotes/origin/master
import toast, { Toaster } from 'react-hot-toast';
import { Details } from './components/Details';
import { ImageProduct } from './components/ImageProduct';
import { ProductContainer } from './Styled-Components';
<<<<<<< HEAD
import { Container } from '../../components';

const ProductDetails = () => {
  const { Id } = useParams();
  const { isLogged, cart } = useSelector((state) => state.user);
=======

const ProductDetails = () => {
  const { Id } = useParams();
  const { isLogged } = useSelector((state) => state.user);
>>>>>>> refs/remotes/origin/master
  const { products } = useSelector((state) => state.products);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const product = products?.find((prod) => prod.id === Id);
  const { category, discount, id, name, price, stock, subCategory, unit, urlPhoto, volume } = product;
<<<<<<< HEAD

  const amountOfProductInCart = cart.items?.find((item) => item.id === id)?.quantity || 0;
=======
>>>>>>> refs/remotes/origin/master

  const handleAddCart = () => {
    if (!isLogged) {
      toast.error('Debes iniciar sesión para agregar al carrito', {
        position: 'top-center',
        duration: 1000,
        style: {
          padding: '10px',
          marginTop: '115px',
          borderRadius: '4px',
          background: theme === 'light' ? '#add1c7ca' : '#00313fca',
          color: theme === 'light' ? '#000' : '#fff',
          fontSize: '1.5rem',
        },
      });
      return;
    }
    if (!!stock) {
      dispatch(addProductToCart({ id, price, discount }));
      dispatch(reduceStockProduct(id));
    }
  };

  const handleRemoveCart = () => {
    if (!!amountOfProductInCart) {
      dispatch(removeProductToCart({ discount, id, price, quantity: 1 }));
      dispatch(restoreStockProduct({ id, quantity: 1 }));
    }
  };

  return (
    <Container justify='center'>
      <ProductContainer>
        <ImageProduct discount={discount} stock={stock} urlPhoto={urlPhoto} />
        <Details {...product} handleRemoveCart={handleRemoveCart} handleAddCart={handleAddCart} />
      </ProductContainer>
    </Container>
  );
};

export default ProductDetails;
