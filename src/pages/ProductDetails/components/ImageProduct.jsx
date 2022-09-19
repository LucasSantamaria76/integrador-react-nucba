import { BoxInfo, Image } from '../Styled-Components';
import { useNavigate } from 'react-router-dom';

export const ImageProduct = ({ discount, stock, urlPhoto }) => {
  const navigate = useNavigate();
  return (
    <Image url={urlPhoto} onClick={() => navigate(-1)}>
      <BoxInfo stock={!!stock} show={!stock || !!discount}>
        {!stock && 'Sin stock'}
        {!!stock && !!discount && `${discount}% de descuento`}
      </BoxInfo>
    </Image>
  );
};
