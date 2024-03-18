import Button from "components/Button";
import image from "assets/images/home_hero.png"

const Hero = () => {
  return (
    <div className="flex justify-between mx-10">
      <div className="font-bold w-96 py-10">
        <div className="text-7xl">More than just a development agency</div>
        <div className="text-2xl mt-8 mb-12">TAILORING YOURSOFTWARE NEEDS WITH BRILLIANT <span className="text-secondary">BRAINS</span></div>
        <Button onClick={() => {}} buttonText="Hire Now" />
      </div>
      <img src={image} width={420} height={680}/>
    </div>
  );
};

export default Hero;
