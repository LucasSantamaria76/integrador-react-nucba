import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ButtonFav, MainContainer } from '../../components/common';
import {
  addProductToCart,
  hideMenus,
  reduceStockProduct,
  removeProductToCart,
  restoreStockProduct,
} from '../../redux/slices';
import toast, { Toaster } from 'react-hot-toast';
import { Details } from './components/Details';
import { ImageProduct } from './components/ImageProduct';
import { ProductContainer } from './Styled-Components';

const ProductDetails = () => {
  const { Id } = useParams();
  const { isLogged } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const product = products?.find((prod) => prod.id === Id);
  const { category, discount, id, name, price, stock, subCategory, unit, urlPhoto, volume } = product;

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
    dispatch(removeProductToCart({ discount, id, price, quantity: 1 }));
    !!amountOfProductInCart && dispatch(restoreStockProduct({ id, quantity: 1 }));
  };

  return (
    <MainContainer onClick={() => dispatch(hideMenus())}>
      <ProductContainer>
        <ImageProduct discount={discount} stock={stock} urlPhoto={urlPhoto} />
        <Details {...product} handleRemoveCart={handleRemoveCart} handleAddCart={handleAddCart} />
      </ProductContainer>
    </MainContainer>
  );
};

export default ProductDetails;
