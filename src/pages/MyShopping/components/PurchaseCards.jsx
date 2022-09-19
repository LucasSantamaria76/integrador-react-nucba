import { MyShoppingCard, ShoppingContainer } from '../Styled-Components';
import { Items } from './Items';
import { DetailsPurchase } from './DetailsPurchase';

export const PurchaseCards = ({ purchase }) => {
  return (
    <ShoppingContainer>
      {purchase?.map((el) => {
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

            <Items el={el} />
            <DetailsPurchase {...el} />
          </MyShoppingCard>
        );
      })}
    </ShoppingContainer>
  );
};
