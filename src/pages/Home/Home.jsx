import { useDispatch } from 'react-redux';
import Offers from '../../components/Offers/Offers';
import { hideMenus } from '../../redux/slices';
import { Slider } from './../../components/Slider/Slider';
import { Container } from './Home.styles';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <Container onClick={() => dispatch(hideMenus())}>
      <Slider />
      <Offers />
    </Container>
  );
};

export default Home;
