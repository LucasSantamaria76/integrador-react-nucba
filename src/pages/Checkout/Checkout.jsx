import { hideMenus } from '../../redux/slices';
import { useDispatch } from 'react-redux';
import { CheckoutWrapper } from './Styled-Components';
import FormCheckout from './components/FormCheckout';
import ProductsCheckout from './components/ProductsCheckout';

const Checkout = () => {
  const dispatch = useDispatch();
  return (
    <CheckoutWrapper onClick={() => dispatch(hideMenus())}>
      <FormCheckout />
      <ProductsCheckout />
    </CheckoutWrapper>
  );
};

export default Checkout;
