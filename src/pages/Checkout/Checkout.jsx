import FormCheckout from '../../components/Checkout/Form/FormCheckout';
import { CheckoutWrapper } from './Checkout.styles';
import ProductsCheckout from './../../components/Checkout/Products/ProductsCheckout';

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <FormCheckout />
      <ProductsCheckout />
    </CheckoutWrapper>
  );
};

export default Checkout;
