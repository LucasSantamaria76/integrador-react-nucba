import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, selectSubCategory } from '../../redux/slices';
import { CategoryStyled, SubCategoryStyled } from './category.styles';

export const Category = ({ menu, text }) => {
  const dispatch = useDispatch();
  const { values, selectedCategory, selectedSubCategory } = useSelector((state) => state.categories);

  return (
    <>
      <CategoryStyled onClick={() => dispatch(selectCategory(text))} selected={selectedCategory === text} menu={menu}>
        {text}
      </CategoryStyled>
      {selectedCategory === text &&
        values[text]?.map((el) => (
          <SubCategoryStyled
            selected={selectedSubCategory === el}
            onClick={() => dispatch(selectSubCategory(el))}
            key={el}>
            {el}
          </SubCategoryStyled>
        ))}
    </>
  );
};
