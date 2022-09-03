import { formatPrice } from '../../utils/formatPrice';
import { BoxInfo, CardBody, CardFooter, CartContainer, Image, Info, Title, WrapperCard } from './CardProducts.style';
import cartImg from '../../assets/cart.png';
import { Badge, ButtonFav, Cart } from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, reduceStockProduct } from '../../redux/slices';

import { useNavigate } from 'react-router-dom';

const CardProducts = ({ discount, id, name, price, stock, unit, urlPhoto, volume }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const { units } = useSelector((state) => state.units);

  const handleAddCart = () => {
    if (!!stock) {
      dispatch(addProductToCart({ id, price, discount }));
      dispatch(reduceStockProduct(id));
    }
  };

  const amountOfProductInCart = cart.items?.find((item) => item.id === id)?.quantity;

  return (
    <WrapperCard>
      <Image url={urlPhoto} onClick={() => navigate(`/productDetails/${id}`)}>
        <BoxInfo stock={!!stock} show={!stock || !!discount}>
          {!stock && 'Sin stock'}
          {!!stock && !!discount && `${discount}% de descuento`}
        </BoxInfo>
      </Image>
      <CardBody>
        <Title>{name}</Title>
        <Info>
          <span>Precio</span>
          {formatPrice(price)}
        </Info>
        <Info>
          <span>Stock</span>
          {stock}
        </Info>
        <CardFooter>
          <h4>{`Precio x ${units[unit]?.conv} ${formatPrice(price * (units[unit]?.unit / volume))}`}</h4>
        </CardFooter>
        <CartContainer stock={stock} onClick={handleAddCart}>
          <Badge itemsInCart={amountOfProductInCart} card={true}>
            {amountOfProductInCart}
          </Badge>
          <Cart src={cartImg} />
        </CartContainer>
        <ButtonFav id={id} size={1} pos='true' />
      </CardBody>
    </WrapperCard>
  );
};

export default CardProducts;
