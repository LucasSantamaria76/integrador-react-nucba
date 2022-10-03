import { IconClose, Menu, NavbarWrapper, NavLinked } from './styles';
import { useResize } from './../../hooks/useResize';
import { useDispatch, useSelector } from 'react-redux';
import { setShowMovilMenu } from '../../redux/slices';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Overlay } from '../Overlay';
import SearchBar from '../SearchBar';
import { CheckBoxDarkMode } from '../CheckBoxDarkMode';

export const Navbar = ({ list }) => {
  const { isDesktop } = useResize();
  const dispatch = useDispatch();
  const { showMovilMenu } = useSelector((state) => state.show);

  const direction = isDesktop ? 'row' : 'column';

  return (
    <>
      {showMovilMenu && (
        <Overlay
          onClick={() => {
            dispatch(setShowMovilMenu(false));
          }}
        />
      )}
      <NavbarWrapper showMovilMenu={showMovilMenu} direction={direction}>
        <IconClose>
          <AiOutlineMenuUnfold onClick={() => dispatch(setShowMovilMenu(false))} />
        </IconClose>
        <SearchBar />
        <CheckBoxDarkMode />
        <Menu direction={direction}>
          {!!list?.length &&
            list.map((item) => (
              <NavLinked
                to={`/${item.toLowerCase().replace(/ /g, '')}`}
                key={item}
                onClick={() => dispatch(setShowMovilMenu(false))}>
                {item}
              </NavLinked>
            ))}
        </Menu>
      </NavbarWrapper>
    </>
  );
};
