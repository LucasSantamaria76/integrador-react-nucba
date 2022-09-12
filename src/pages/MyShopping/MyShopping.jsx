import { useSelector } from 'react-redux';
import { CardImage } from '../../components/CartDrawer/CartDrawer.styles';

import {
  Details,
  DetailsLabel,
  DetailsAmounts,
  ItemsContainer,
  MyShoppingCard,
  MyShoppingWrapper,
  ShoppingContainer,
  DetailProduct,
  CardOrdersContainer,
} from './MyShopping.styles';
import SelectDate from './SelectDate';
import { limitString } from './../../utils';
import { formatPrice } from './../../utils/formatPrice';
import { useState } from 'react';

const MyShopping = () => {
  const [date, setDate] = useState('');
  const { orders } = useSelector((state) => state);
  const { products } = useSelector((state) => state.products);
  let shopping = Object.values(orders).reduce((acc, val) => [...acc, ...val], []);
  shopping = !!date ? shopping.filter((el) => el.date === date) : shopping;

  return (
    <MyShoppingWrapper>
      {!!orders && (
        <div id='header'>
          <h2>MIS COMPRAS</h2>
          <h3>Filtrar por fecha de compra</h3>
          <SelectDate
            name={'orders'}
            options={Object.keys(orders).sort()}
            placeholder='Todas'
            width={250}
            setDate={setDate}
          />
        </div>
      )}

      <ShoppingContainer>
        {shopping?.map((el) => {
          const numberOfItemsIThePurchase = el.items.reduce((acc, item) => (acc += item.quantity), 0);
          return (
            <MyShoppingCard key={el.date + '*' + el.shoppingTime}>
              <p>
                Compra hecha el {el.date} a las {el.shoppingTime}
              </p>
              <p>Pedido enviado a {el.shippingInformation.address} </p>
              <p>
                Productos: {el.items.length} --- Articulos: {numberOfItemsIThePurchase}
              </p>
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
              <Details>
                <DetailsLabel>
                  <h5>Total de pedido</h5>
                  <h5>Descuento</h5>
                  <h5>Costo de envío</h5>
                  <h4>Total abonado</h4>
                </DetailsLabel>
                <DetailsAmounts>
                  <h5>{formatPrice(el.totalCost)}</h5>
                  <h5>{formatPrice(el.totalDiscount)}</h5>
                  <h5>{formatPrice(el.shippingCost)}</h5>
                  <h4>{formatPrice(el.totalCost + el.shippingCost - el.totalDiscount)}</h4>
                </DetailsAmounts>
              </Details>
            </MyShoppingCard>
          );
        })}
      </ShoppingContainer>
    </MyShoppingWrapper>
  );
};

{
  /* <MyShoppingCard key={el.shoppingTime}></MyShoppingCard> */
}
export default MyShopping;
