import FormCheckout from '../../components/Checkout/Form/FormCheckout';
import { CheckoutWrapper } from './Checkout.styles';
import ProductsCheckout from './../../components/Checkout/Products/ProductsCheckout';
import { hideMenus } from '../../redux/slices';
import { useDispatch } from 'react-redux';

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
