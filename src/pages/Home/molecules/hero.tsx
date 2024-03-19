import Button from "components/Button";
import image from "assets/images/home_hero.png";

const Hero = () => {
  return (
    <div className="flex justify-between w-full px-10">
      <div className="font-bold w-[460px] py-20" >
        <div className="text-7xl leading-[94px]">More than just a development agency</div>
        <div className="text-2xl mt-7 mb-8">
          TAILORING YOURSOFTWARE NEEDS WITH BRILLIANT
          <span className="text-secondary">BRAINS</span>
        </div>
        <Button onClick={() => {}} buttonText="Hire Now" />
      </div>
      <div className="w-[420px] h-[684px]">
        <img src={image} width={'100%'} height={'100%'}/>
      </div>
    </div>
  );
};

export default Hero;
