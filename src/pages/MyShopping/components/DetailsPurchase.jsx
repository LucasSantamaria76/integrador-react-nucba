import { Details, DetailsAmounts, DetailsLabel } from '../Styled-Components';
import { formatPrice } from './../../../utils';

export const DetailsPurchase = ({ totalCost, totalDiscount, shippingCost }) => {
  return (
    <Details>
      <DetailsLabel>
        <h5>Total de pedido</h5>
        <h5>Descuento</h5>
        <h5>Costo de envío</h5>
        <h4>Total abonado</h4>
      </DetailsLabel>
      <DetailsAmounts>
        <h5>{formatPrice(totalCost)}</h5>
        <h5>{formatPrice(totalDiscount)}</h5>
        <h5>{formatPrice(shippingCost)}</h5>
        <h4>{formatPrice(totalCost + shippingCost - totalDiscount)}</h4>
      </DetailsAmounts>
    </Details>
  );
};
