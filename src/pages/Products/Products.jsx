import { useDispatch, useSelector } from 'react-redux';
import { setShowMenuCategory, setShowUserMenu } from '../../redux/slices';
import { CategoryContainer, Container, MenuCategoryText, ProductsContainer } from './styles';
import { Category } from '../../components/Categories/Category';
import ProductsCard from '../../components/ProductsCard';
import { useLocation } from 'react-router-dom';
import { useResize } from './../../hooks/useResize';
import MenuCategory from '../../components/Categories/MenuCategory';
import { Overlay } from './../../components/Overlay/index';

const Products = ({ isFavorites }) => {
  const { pathname } = useLocation();
  const { isTablet } = useResize();
  const { products } = useSelector((state) => state.products);
  const { favorites } = useSelector((state) => state.user);
  const { showMenuCategory } = useSelector((state) => state.show);
  const { values: categories } = useSelector((state) => state.categories);
  const { FilterCategory, FilterSearch, FilterSubCategory } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleShowMenuCategory = (e) => {
    e.stopPropagation();
    dispatch(setShowMenuCategory(!showMenuCategory));
  };

  const filteredProducts = () => {
    if (!!products.length) {
      let productsFiltered = isFavorites ? products?.filter((el) => favorites?.includes(el.id)) : products;

      !!FilterCategory && (productsFiltered = productsFiltered?.filter((el) => el.category === FilterCategory));
      !!FilterSubCategory &&
        (productsFiltered = productsFiltered?.filter((el) => el.subCategory === FilterSubCategory));

      const matches = productsFiltered?.filter((el) => el.name.toLowerCase().startsWith(FilterSearch));
      !!matches.length
        ? (productsFiltered = matches)
        : (productsFiltered = productsFiltered?.filter((el) => el.name.toLowerCase().includes(FilterSearch)));

      return productsFiltered;
    }
    return products;
  };

  const listProducts = filteredProducts();

  return (
    <Container onClick={() => dispatch(setShowUserMenu(false))}>
      {isTablet && ['/favoritos', '/productos'].includes(pathname) && (
        <MenuCategoryText onClick={handleShowMenuCategory}>CATEGORIAS</MenuCategoryText>
      )}
      {showMenuCategory && (
        <Overlay
          onClick={() => {
            dispatch(setShowMenuCategory(false));
          }}
        />
      )}
      {showMenuCategory && <MenuCategory />}
      <CategoryContainer>
        {!!Object.keys(categories)?.length ? (
          Object.keys(categories)?.map((cat) => <Category key={cat} text={cat} menu={false} />)
        ) : (
          <h6>Error al cargar las categorias</h6>
        )}
      </CategoryContainer>
      <ProductsContainer>
        {!!listProducts?.length ? (
          listProducts.map((prod) => <ProductsCard key={prod.id} {...prod} />)
        ) : (
          <h2>No hay productos para mostrar</h2>
        )}
      </ProductsContainer>
      <div></div>
    </Container>
  );
};

export default Products;
