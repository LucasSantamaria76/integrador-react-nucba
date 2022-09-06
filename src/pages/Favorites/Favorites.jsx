import { Column } from '../../components/common';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../components/common';
import CardProducts from '../../components/CardProducts/CardProducts';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const { filters } = useSelector((state) => state.filter);

  const prodFav = products?.filter((el) => favorites?.includes(el.id));

  const filteredProducts = () => {
    if (!!filters?.search) return prodFav.filter((el) => el.name.toLowerCase().startsWith(filters.search));

    return prodFav;
  };

  const listProducts = filteredProducts();

  return (
    <MainContainer>
      <Column>
        {!!listProducts?.length ? (
          listProducts?.map((prod) => <CardProducts key={prod.id} {...prod} />)
        ) : (
          <h2>No hay productos agregados a favoritos</h2>
        )}
      </Column>
    </MainContainer>
  );
};

export default Favorites;
