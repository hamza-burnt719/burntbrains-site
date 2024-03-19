import { Colors } from "utils/colors";
import image from "assets/images/technology.png"

const Technology = () => {
  return (
    <div className="text-center px-10">
      <div className="flex items-center justify-center">
        <svg width={20} height={20}>
          <circle
            cx={15}
            cy={15}
            r={5}
            fill={Colors.Gamboge}
          />
        </svg>
      </div>
      <div className="font-medium text-sm uppercase pt-5">What we are offering</div>
      <div className="text-5xl mt-7 mb-8 leading-[63px] font-extrabold w-[600px] text-center m-auto">
        <span className="text-secondary">Services</span> We’re Providing To Our
        Customers
      </div>
      <img src={image} width={'100%'} alt="tech"/>
    </div>
  );
};

export default Technology;
