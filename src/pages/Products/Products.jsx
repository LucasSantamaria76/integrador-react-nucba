import { useDispatch, useSelector } from 'react-redux';
import CardProducts from '../../components/CardProducts/CardProducts';
import { CategoryContainer, Container, ProductsContainer } from './Products.styles';
import { Category } from '../../components/Categories/Category';
import { hideMenus } from '../../redux/slices';

const Products = ({ isFavorites }) => {
  const { products } = useSelector((state) => state.products);
  const { favorites } = useSelector((state) => state.user);
  const { values: categories } = useSelector((state) => state.categories);
  const { FilterCategory, FilterSearch, FilterSubCategory } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredProducts = () => {
    if (!!products.length) {
      let productsFiltered = isFavorites ? products?.filter((el) => favorites?.includes(el.id)) : products;

      !!FilterCategory && (productsFiltered = productsFiltered?.filter((el) => el.category === FilterCategory));
      !!FilterSubCategory &&
        (productsFiltered = productsFiltered?.filter((el) => el.subCategory === FilterSubCategory));
      productsFiltered = productsFiltered?.filter((el) => el.name.toLowerCase().startsWith(FilterSearch));
      return productsFiltered;
    }
    return products;
  };

  const listProducts = filteredProducts();

  return (
    <Container onClick={() => dispatch(hideMenus())}>
      <CategoryContainer>
        {!!Object.keys(categories)?.length ? (
          Object.keys(categories)?.map((cat) => <Category key={cat} text={cat} menu={false} />)
        ) : (
          <h6>Error al cargar las categorias</h6>
        )}
      </CategoryContainer>
      <ProductsContainer>
        {!!listProducts?.length ? (
          listProducts.map((prod) => <CardProducts key={prod.id} {...prod} />)
        ) : (
          <h2>No hay productos para mostrar</h2>
        )}
      </ProductsContainer>
      <div></div>
    </Container>
  );
};

export default Products;
