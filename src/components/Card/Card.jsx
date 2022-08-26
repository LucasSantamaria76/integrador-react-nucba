import { useContext } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../../utils/formatPrice';
import { Text } from '../common';

const urlBase = 'https://imagenes.preciosclaros.gob.ar/productos/';

const Card = ({ id, name, price }) => {
  return (
    <WrapperCard height='450px' width='300px'>
      <Image url={`${urlBase}${id}.jpg`} />
      <Title>{name}</Title>
      <Info>{formatPrice(price)}</Info>
    </WrapperCard>
  );
};

export default Card;

const WrapperCard = styled.div`
  width: ${({ width = '200px' }) => width};
  height: ${({ height = '120px' }) => height};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 2px;
  flex-grow: 1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled(Text)`
  font-weight: 600;
  font-size: 18px;
`;

const Info = styled.div`
  color: ${({ theme }) => theme.colors.text2};
  font-weight: 300;
  font-size: 70px;
`;

const Image = styled.div`
  width: 300px;
  height: 300px;
  margin: 0;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;