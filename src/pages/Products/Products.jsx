import { Column } from '../../components/common';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../components/common';
import CardProducts from '../../components/CardProducts/CardProducts';

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const { filters } = useSelector((state) => state.filter);

  const filteredProducts = () => {
    if (!!filters?.search) return products.filter((el) => el.name.toLowerCase().startsWith(filters.search));

    return products;
  };

  const listProducts = filteredProducts();

  return (
    <MainContainer>
      <Column>
        {!!listProducts?.length ? (
          listProducts?.map((prod) => <CardProducts key={prod.id} {...prod} />)
        ) : (
          <h2>Error al cargar los productos</h2>
        )}
      </Column>
    </MainContainer>
  );
};

export default Products;
