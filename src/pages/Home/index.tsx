import Logo from 'assets/icons/logo.svg';
import Hero from './molecules/hero';
import Technology from './molecules/technology';
import Work from './molecules/work';
import Testimonial from './molecules/testimonial';
import AboutUs from './molecules/about'
import Awards from './molecules/awards';
import Footer from './molecules/footer';

const Home = () => {
  return (
  <div>
    <img className='px-24' src={Logo} alt="logo"/>
    <Hero />
    <Technology />
    <Work />
    <Testimonial />
    <AboutUs />
    <Awards />
    <Footer />
  </div>
  );
};

export default Home;
