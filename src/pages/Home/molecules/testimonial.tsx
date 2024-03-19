import IconText from "components/IconText";
import { BiAbacus } from "react-icons/bi";


const Testimonial = () => {
  return (
    <div className="px-10">
      <div className="flex justify-between">
        <div className="text-4xl font-medium">Worked with top company all over world</div>
        <div className="">
          <IconText text={"My Values"} Icon={BiAbacus}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
