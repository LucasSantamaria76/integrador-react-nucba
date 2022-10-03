import { useDispatch, useSelector } from 'react-redux';
import { addFilterCategory, addFilterSubCategory, hideMenus } from '../../redux/slices';
import { CategoryStyled, SubCategoryStyled } from './category.styles';

export const Category = ({ menu, text }) => {
  const dispatch = useDispatch();
  const { values } = useSelector((state) => state.categories);
  const { FilterCategory, FilterSubCategory } = useSelector((state) => state.filter);

  const handleClickCategory = (e) => {
    e.stopPropagation();
    dispatch(addFilterCategory(text));
    dispatch(hideMenus());
  };

  const handleClickSubCategory = (e, el) => {
    e.stopPropagation();
    dispatch(addFilterSubCategory(el));
    dispatch(hideMenus());
  };

  return (
    <>
      <CategoryStyled
        onClick={handleClickCategory}
        selected={FilterCategory === text}
        menu={menu}
        noSelected={!!FilterCategory}>
        {text}
      </CategoryStyled>
      {FilterCategory === text &&
        values[text]?.map((el) => (
          <SubCategoryStyled
            selected={FilterSubCategory === el}
            onClick={(e) => handleClickSubCategory(e, el)}
            key={el}>
            {el}
          </SubCategoryStyled>
        ))}
    </>
  );
};
