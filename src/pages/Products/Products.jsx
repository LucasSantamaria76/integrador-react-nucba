import { Column } from '../../components/common';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../components/common';
import CardProducts from '../../components/CardProducts/CardProducts';

const Products = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <MainContainer>
      <Column>
        {!!products?.length ? products?.map((prod) => <CardProducts key={prod.id} {...prod} />) : <h2>Error al cargar los productos</h2>}
      </Column>
    </MainContainer>
  );
};

export default Products;
