import { Column } from '../../components/common';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../components/common';
import CardProducts from '../../components/CardProducts/CardProducts';
import { CategoryContainer, Container, ProductsContainer } from './Products.styles';
import { Category } from '../../components/Categories/Category';

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const { values: categories } = useSelector((state) => state.categories);
  const { filters } = useSelector((state) => state.filter);

  const filteredProducts = () => {
    if (!!filters?.search) return products.filter((el) => el.name.toLowerCase().startsWith(filters.search));
    return products;
  };

  const listProducts = filteredProducts();

  return (
    <>
      <Container>
        <CategoryContainer>
          {!!Object.keys(categories)?.length ? (
            Object.keys(categories)?.map((cat) => <Category key={cat} text={cat} menu={false} />)
          ) : (
            <h6>Error al cargar las categorias</h6>
          )}
        </CategoryContainer>
        <ProductsContainer>
          {!!listProducts?.length ? (
            listProducts?.map((prod) => <CardProducts key={prod.id} {...prod} />)
          ) : (
            <h2>No hay productos para mostrar</h2>
          )}
        </ProductsContainer>
        <div></div>
      </Container>
    </>
  );
};

export default Products;
