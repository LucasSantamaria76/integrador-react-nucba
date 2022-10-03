import { Badge, CartImg, CartContainer } from './styles';
import cartImg from '../../assets/cart.png';

export const Cart = ({ card, itemsInCart, stock, onClick }) => {
  return (
    <CartContainer card={card} stock={stock} onClick={onClick}>
      <Badge itemsInCart={itemsInCart} card>
        {itemsInCart}
      </Badge>
      <CartImg src={cartImg} />
    </CartContainer>
  );
};

/* () => {
        dispatch(hideMenus());
            dispatch(toggleVisibleCart());
      } */
