import Logo from 'assets/icons/logo.svg';
import Hero from './molecules/hero';
import Technology from './molecules/technology';
import Work from './molecules/work';
import Testimonial from './molecules/testimonial';

const Home = () => {
  return (
  <div>
    <img src={Logo} alt="logo"/>
    <Hero />
    <Technology />
    <Work />
    <Testimonial />
  </div>
  );
};

export default Home;
