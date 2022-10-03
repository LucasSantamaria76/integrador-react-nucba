import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, restoreStockProduct, toggleVisibleCart } from '../../redux/slices';
import CardCart from './CardCart';
import { FaTrash } from 'react-icons/fa';
import { BodyFooter, CardsContainer, CartFooter, CartTitle, ContainerStyled } from './styles';
import { formatPrice } from '../../utils/formatPrice';
import { SHIPPING_COST } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { Overlay } from '../Overlay';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const {
    cart: { items, visible, totalDiscount, totalCost },
  } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const emptyingCart = () => {
    items.forEach((el) => {
      dispatch(restoreStockProduct({ id: el.id, quantity: el.quantity }));
    });
    dispatch(emptyCart());
  };

  const handleInitCheckout = () => {
    navigate('/checkout');
    dispatch(toggleVisibleCart());
  };

  const amountOfProductsInCart = items.reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <>
      {visible && (
        <Overlay
          onClick={() => {
            dispatch(toggleVisibleCart());
          }}
        />
      )}
      <AnimatePresence>
        {visible && (
          <ContainerStyled
            initial={{ translateX: 700 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 700 }}
            transition={{ type: 'spring', damping: 20 }}
            key='cart-modal'>
            <Button
              r='8px'
              bg='info'
              shadow
              outline
              w='30px'
              h='30px'
              handleClick={() => dispatch(toggleVisibleCart())}>
              X
            </Button>
            {!!items.length && (
              <CartTitle>
                <div>
                  <h2>Productos en el carrito</h2>
                  <p>
                    Productos: {items.length} --- Articulos: {amountOfProductsInCart}
                  </p>
                </div>
                <Button w='200px' h='50px' r='8px' bg='info' shadow outline handleClick={() => emptyingCart()}>
                  <FaTrash />
                  Vaciar carrito
                </Button>
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
                <Button r='8px' bg='info' shadow outline handleClick={handleInitCheckout}>
                  Iniciar pedido
                </Button>
              </CartFooter>
            )}
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;
