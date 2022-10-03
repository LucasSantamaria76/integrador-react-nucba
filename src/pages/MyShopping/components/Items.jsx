import { useSelector } from 'react-redux';
import { CardOrdersContainer, DetailProduct, ItemsContainer } from '../Styled-Components';
import { formatPrice, limitString } from './../../../utils';
import { CardImage } from './../../../components/CartDrawer/styles';

export const Items = ({ el }) => {
  const { products } = useSelector((state) => state.products);
  return (
    <ItemsContainer>
      {el.items?.map((art) => {
        const { name, urlPhoto, price, discount } = products.find((p) => p.id === art.id);
        return (
          <CardOrdersContainer key={art.id}>
            <CardImage url={urlPhoto} />
            <DetailProduct>
              <p>{limitString(name, 50)}</p>
              <p>Cantidad {art.quantity}</p>
              <p>Precio x art. {formatPrice(price)}</p>
              <p>Descuento x art. {formatPrice(price * (discount / 100))}</p>
              <p>SubTotal del producto s/desc. {formatPrice(price * art.quantity)}</p>
            </DetailProduct>
          </CardOrdersContainer>
        );
      })}
    </ItemsContainer>
  );
};
