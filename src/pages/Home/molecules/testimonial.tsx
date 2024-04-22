import IconText from "components/IconText";
import { BiAbacus } from "react-icons/bi";
import Reviews from "./reviews";


const Testimonial = () => {
  return (
    <div className="px-32">
      <div className="flex justify-between">
        <div className="text-4xl font-medium w-1/4">Worked with top company all over world</div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-10">
            <IconText text={"My Values"} Icon={BiAbacus}/>
            <IconText text={"My Values"} Icon={BiAbacus}/>
            <IconText text={"My Values"} Icon={BiAbacus}/>
            <IconText text={"My Values"} Icon={BiAbacus}/>
          </div>
          <div className="flex flex-row gap-10">
            <IconText text={"My Values"} Icon={BiAbacus}/>
            <IconText text={"My Values"} Icon={BiAbacus}/>
            <IconText text={"My Values"} Icon={BiAbacus}/>
            <IconText text={"My Values"} Icon={BiAbacus}/>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <h1 className="text-4xl font-extrabolds text-extraPrimary pb-10">TESTIMONIAL</h1>
        <p className="text-3xl pb-10">What people are saying</p>
        <Reviews />
        <Reviews />
      </div>
    </div>
  );
};

export default Testimonial;
