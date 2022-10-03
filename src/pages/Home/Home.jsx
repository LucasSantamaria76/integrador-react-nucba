import { useDispatch } from 'react-redux';
import { Container, Slider } from '../../components';
import Offers from '../../components/Offers';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <Container direction='column' /* onClick={() => dispatch(hideMenus())} */>
      <Slider />
      <Offers />
    </Container>
  );
};

export default Home;
