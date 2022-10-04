import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  BodyFooter,
  CardCartContainer,
  CardsContainer,
  CartFooter,
  CartTitle,
<<<<<<< HEAD
} from './../../../components/CartDrawer/styles';
=======
} from './../../../components/CartDrawer/CartDrawer.styles';
>>>>>>> refs/remotes/origin/master
import { ProductsCheckoutWrapper } from '../Styled-Components';
import { formatPrice, SHIPPING_COST } from './../../../utils';
import CardCart from './../../../components/CartDrawer/CardCart';

const ProductsCheckout = () => {
  const { products } = useSelector((state) => state.products);
  const {
    cart: { items, totalDiscount, totalCost },
  } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <ProductsCheckoutWrapper>
      {!!items.length && (
        <CartTitle>
          <h2>Tu pedido</h2>
        </CartTitle>
      )}
      <CardsContainer isEmpty={!items.length}>
        {!!items.length ? (
          items?.map((item) => {
            const product = { ...products.find((prod) => prod.id === item.id), quantity: item.quantity };
            return <CardCart key={item.id} {...product} />;
          })
        ) : (
          <h2>No hay productos en el carrito</h2>
        )}
      </CardsContainer>
      {!!items.length && (
        <CartFooter>
          <BodyFooter>
            <div>
              <h3>SubTotal</h3>
              <span>{formatPrice(totalCost)}</span>
            </div>
            <div>
              <h3>Descuento</h3>
              <span className='discount'>- {formatPrice(totalDiscount)}</span>
            </div>
            <div>
              <h3>Envío</h3>
              <span>{formatPrice(SHIPPING_COST)}</span>
            </div>
            <div className='totalContainer'>
              <h2>Total</h2>
              <span className='total'>{formatPrice(totalCost + SHIPPING_COST - totalDiscount)}</span>
            </div>
          </BodyFooter>
        </CartFooter>
      )}
    </ProductsCheckoutWrapper>
  );
};

export default ProductsCheckout;
