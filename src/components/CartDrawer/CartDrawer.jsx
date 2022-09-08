import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, restoreStockProduct, toggleVisibleCart } from '../../redux/slices';
import { Button, Overlay } from '../common';
import CardCart from './CardCart';
import { FaTrash } from 'react-icons/fa';
import { BodyFooter, CardsContainer, CartFooter, CartTitle, ContainerStyled } from './CartDrawer.styles';
import { formatPrice } from './../../utils/formatPrice';
import { SHIPPING_COST } from '../../utils';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const {
    cart: { items, visible, totalDiscount, totalCost },
  } = useSelector((state) => state.user);

  const emptyingCart = () => {
    items.forEach((el) => {
      dispatch(restoreStockProduct({ id: el.id, quantity: el.quantity }));
    });
    dispatch(emptyCart());
  };

  const amountOfProductsInCart = items.reduce((acc, item) => (acc += item.quantity), 0);

  return (
    <>
      {visible && (
        <Overlay
          onClick={() => {
            dispatch(toggleVisibleCart());
          }}
          isHidden={!visible}
          full
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
            <Button width='30px' height='30px' handleClick={() => dispatch(toggleVisibleCart())}>
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
                <Button width='200px' handleClick={() => emptyingCart()}>
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
                <Button>Iniciar pedido</Button>
              </CartFooter>
            )}
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;
