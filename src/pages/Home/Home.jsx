import Offers from '../../components/Offers/Offers';
import { Slider } from './../../components/Slider/Slider';
import { Container } from './Home.styles';

const Home = () => {
  return (
    <Container>
      <Slider />
      <Offers />
    </Container>
  );
};

export default Home;
