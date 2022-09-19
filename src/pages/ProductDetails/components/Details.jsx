import Barcode from 'react-barcode';
import { formatPrice } from '../../../utils';
import { BsCartDash, BsCartPlus } from 'react-icons/bs';
import { BoxCart, BoxPrice, BtnCart, DetailsContainer } from '../Styled-Components';
import { ButtonFav } from '../../../components/common';
import { useSelector } from 'react-redux';

const options = {
  height: 65,
  format: 'EAN13',
  fontSize: 16,
};

export const Details = ({
  category,
  discount,
  id,
  name,
  price,
  stock,
  subCategory,
  unit,
  volume,
  handleAddCart,
  handleRemoveCart,
}) => {
  const { units } = useSelector((state) => state.units);
  const { cart } = useSelector((state) => state.user);

  const amountOfProductInCart = cart.items?.find((item) => item.id === id)?.quantity || 0;
  return (
    <DetailsContainer>
      <h2>{name}</h2>
      <BoxPrice discount={!!discount}>
        {!!discount && <h5>Antes</h5>}
        <h3>{formatPrice(price)}</h3>
        {!!discount && <h5>Ahora</h5>}
        {!!discount && <h2>{formatPrice(price - price * (discount / 100))}</h2>}
      </BoxPrice>
      <p>{`Volumen: ${volume} ${units[unit].conv}`}</p>
      <p>{`Stock: ${stock} unidades`}</p>
      <p>{`Categoria: ${category}, ${subCategory}`}</p>
      <BoxCart>
        <BtnCart disabled={!amountOfProductInCart}>
          <BsCartDash onClick={handleRemoveCart} />
        </BtnCart>
        <span>{amountOfProductInCart}</span>
        <BtnCart disabled={!stock}>
          <BsCartPlus onClick={handleAddCart} />
        </BtnCart>
        <ButtonFav size={2.8} id={id} />
      </BoxCart>
      <Barcode value={id} {...options} />
    </DetailsContainer>
  );
};
