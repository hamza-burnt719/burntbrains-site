import Gallery from "components/Gallery";

const Work = () => {
  return (
    <div className="px-10">
      <div className="text-lg font-bold text-tertiory">Our Recent Work</div>
      <div className="text-4xl leading-[48px] font-medium w-[550px] mb-8">
        I turn design visions into Salesforce or MERN reality
      </div>
      <Gallery />
    </div>
  );
};

export default Work;
