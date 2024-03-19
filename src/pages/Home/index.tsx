import Logo from 'assets/icons/logo.svg';
import Hero from './molecules/hero';
import Technology from './molecules/technology';

const Home = () => {
  return (
  <div>
    <img src={Logo} alt="logo"/>
    <Hero />
    <Technology />
  </div>
  );
};

export default Home;
