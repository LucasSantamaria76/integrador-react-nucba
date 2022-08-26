import { Column } from '../../components/common';
import Card from './../../components/Card/Card';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../components/common';

const Products = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <MainContainer>
      <Column>{!!products?.length ? products?.map((prod) => <Card key={prod.id} {...prod} />) : <h2>Error al cargar los productos</h2>}</Column>
    </MainContainer>
  );
};

export default Products;
