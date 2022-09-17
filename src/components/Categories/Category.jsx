import { useDispatch, useSelector } from 'react-redux';
import { addFilterCategory, addFilterSubCategory } from '../../redux/slices';
import { CategoryStyled, SubCategoryStyled } from './category.styles';

export const Category = ({ menu, text }) => {
  const dispatch = useDispatch();
  const { values } = useSelector((state) => state.categories);
  const { FilterCategory, FilterSubCategory } = useSelector((state) => state.filter);

  const handleClickCategory = (e) => {
    e.stopPropagation();
    dispatch(addFilterCategory(text));
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
            onClick={() => dispatch(addFilterSubCategory(el))}
            key={el}>
            {el}
          </SubCategoryStyled>
        ))}
    </>
  );
};
