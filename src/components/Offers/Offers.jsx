import { Container } from './Offers.styles';
import { useSelector } from 'react-redux';
import CardProducts from '../CardProducts/CardProducts';

const compare = (a, b) => {
  if (+a.discount < +b.discount) return 1;
  if (+a.discount > +b.discount) return -1;
  return 0;
};

const Offers = () => {
  const { products } = useSelector((state) => state.products);
  //const offersProducts = products.filter((prod) => prod.discount > 0).sort(compare);
  const offersProducts = products;

  return (
    <Container>
      {!!offersProducts?.length ? (
        offersProducts?.map((prod) => <CardProducts key={prod.id} {...prod} />)
      ) : (
        <h2>No hay productos para mostrar</h2>
      )}
    </Container>
  );
};

export default Offers;
