import { Category } from './Category';
import { MenuCategoryStyled } from './category.styles';
import { useSelector } from 'react-redux';

const MenuCategory = () => {
  const { values: categories } = useSelector((state) => state.categories);

  return (
    <MenuCategoryStyled>
      {!!Object.keys(categories)?.length ? (
        Object.keys(categories)?.map((cat) => <Category key={cat} text={cat} menu={true} />)
      ) : (
        <h6>Error al cargar las categorias</h6>
      )}
    </MenuCategoryStyled>
  );
};

export default MenuCategory;
