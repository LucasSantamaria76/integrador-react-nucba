import { useDispatch } from 'react-redux';
import FormCheckout from './components/FormCheckout';
import { CheckoutWrapper } from './Styled-Components';
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
