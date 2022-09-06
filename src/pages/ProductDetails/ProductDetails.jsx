import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ButtonFav, MainContainer } from '../../components/common';
import {
  BoxCart,
  BoxInfo,
  BoxPrice,
  BtnCart,
  DetailsContainer,
  Image,
  ProductContainer,
} from './ProductDetails.styles';
import Barcode from 'react-barcode';
import { formatPrice } from './../../utils/formatPrice';
import { BsCartDash, BsCartPlus } from 'react-icons/bs';
import { addProductToCart, reduceStockProduct, removeProductToCart, restoreStockProduct } from '../../redux/slices';

const ProductDetails = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const { units } = useSelector((state) => state.units);
  const dispatch = useDispatch();
  const { category, discount, id, name, price, stock, subCategory, unit, urlPhoto, volume } = products?.find(
    (prod) => prod.id === Id
  );

  const options = {
    height: 65,
    format: 'EAN13',
    fontSize: 16,
  };

  const amountOfProductInCart = cart.items?.find((item) => item.id === id)?.quantity || 0;

  const handleAddCart = () => {
    if (!!stock) {
      dispatch(addProductToCart({ id, price, discount }));
      dispatch(reduceStockProduct(id));
    }
  };

  const handleRemoveCart = () => {
    dispatch(removeProductToCart({ discount, id, price, quantity: 1 }));
    !!amountOfProductInCart && dispatch(restoreStockProduct({ id, quantity: 1 }));
  };

  return (
    <MainContainer>
      <ProductContainer>
        <Image url={urlPhoto} onClick={() => navigate(-1)}>
          <BoxInfo stock={!!stock} show={!stock || !!discount}>
            {!stock && 'Sin stock'}
            {!!stock && !!discount && `${discount}% de descuento`}
          </BoxInfo>
        </Image>
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
      </ProductContainer>
    </MainContainer>
  );
};

export default ProductDetails;
