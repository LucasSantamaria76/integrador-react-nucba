import { Container } from './styles';
import { useSelector } from 'react-redux';
import ProductsCard from '../ProductsCard';

const compare = (a, b) => {
  if (+a.discount < +b.discount) return 1;
  if (+a.discount > +b.discount) return -1;
  return 0;
};

const Offers = () => {
  const { products } = useSelector((state) => state.products);
  const offersProducts = !!products.length && products.filter((prod) => prod.discount > 0).sort(compare);

  return (
    <Container>
      {!!offersProducts?.length ? (
        offersProducts.map((prod) => <ProductsCard key={prod.id} {...prod} />)
      ) : (
        <h2>No hay productos para mostrar</h2>
      )}
    </Container>
  );
};

export default Offers;
