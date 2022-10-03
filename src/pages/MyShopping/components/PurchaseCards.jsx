import { MyShoppingCard, ShoppingContainer, ShoppingWrapper } from '../Styled-Components';
import { Items } from './Items';
import { DetailsPurchase } from './DetailsPurchase';
import backgroundImage from '../../../assets/backgroundImage.jpg';

export const PurchaseCards = ({ purchase }) => {
  return (
    <ShoppingWrapper backgroundImage={backgroundImage}>
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
    </ShoppingWrapper>
  );
};
