import Logo from 'assets/icons/logo.svg';
import Hero from './molecules/hero';

const Home = () => {
  return (
  <div>
    <img src={Logo} alt="logo"/>
    <Hero />
  </div>
  );
};

export default Home;
