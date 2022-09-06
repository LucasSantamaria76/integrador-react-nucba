import {
  BtnCart,
  BtnDeleteProduct,
  CardBody,
  CardCartContainer,
  CardImage,
  ProductName,
  ProductPrice,
  QuantityContainer,
  StockStyled,
  SubTotal,
} from './CartDrawer.styles';
import { formatPrice } from './../../utils/formatPrice';
import { BsCartDash, BsCartPlus, BsCartX } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addProductToCart, reduceStockProduct, removeProductToCart, restoreStockProduct } from '../../redux/slices';
import { BoxInfo } from '../common';

const CardCart = ({ discount, id, name, price, quantity, stock, urlPhoto }) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    if (!!stock) {
      dispatch(addProductToCart({ id, price, discount }));
      dispatch(reduceStockProduct(id));
    }
  };

  const handleRemoveCart = (amount) => {
    dispatch(removeProductToCart({ discount, id, price, quantity: amount }));
    !!quantity && dispatch(restoreStockProduct({ id, quantity: amount }));
  };
  return (
    <>
      <CardCartContainer>
        <CardImage url={urlPhoto}>
          <BoxInfo stock={!!stock} show={!stock || !!discount} cart={true}>
            {!stock && 'Sin stock'}
            {!!stock && !!discount && `${discount}% desc.`}
          </BoxInfo>
        </CardImage>
        <CardBody>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            <div>
              Precio x un.<span>{formatPrice(price)}</span>
            </div>
            <div>
              descuento
              <span className='discount'>{discount ? `- ${formatPrice(price * (discount / 100) * quantity)}` : 0}</span>
            </div>
          </ProductPrice>
          <StockStyled>stock: {stock}</StockStyled>
          <QuantityContainer>
            <BtnCart disabled={!quantity}>
              <BsCartDash onClick={() => handleRemoveCart(1)} />
            </BtnCart>
            <span>{quantity}</span>
            <BtnCart disabled={!stock}>
              <BsCartPlus onClick={handleAddCart} />
            </BtnCart>
            <BtnDeleteProduct onClick={() => handleRemoveCart(quantity)}>
              <BsCartX />
            </BtnDeleteProduct>
          </QuantityContainer>
          <SubTotal>
            Subtotal:<span>{formatPrice(price * quantity)}</span>
          </SubTotal>
        </CardBody>
      </CardCartContainer>
    </>
  );
};

export default CardCart;
