import React from "react";

const Awards = () => {
  return (
    <div className="flex flex-row bg-black mt-10 mb-10 py-20">
      <div className="flex flex-col w-2/5 px-32 gap-10">
        <p className="text-3xl">Honourable Recognitions & Awards</p>
        <p className="text-sm text-eeTertiory">
          There are many more, review my{" "}
          <span className="text-extraSecondary"> Linkedin </span> profile to
          find out.
        </p>
      </div>
      <div className="flex flex-col pl-36 gap-10 w-3/5">
        <div className="flex flex-row gap-40 h-1/2">
          <div className="flex flex-col w-full">
            <h1 className="text-extraSecondary text-lg">2001</h1>
            <p>Member of Jury award</p>
          </div>
          <div className="flex flex-col -ml-28 w-full">
            <h1 className="text-extraSecondary text-lg">2010</h1>
            <p>Design of the day award</p>
          </div>
        </div>
        <div className="flex flex-row gap-40">
        <div className="flex flex-col w-full">
            <h1 className="text-extraSecondary text-lg">2018</h1>
            <p>Fans Favourite</p>
          </div>
          <div className="flex flex-col -ml-28 w-full">
            <h1 className="text-extraSecondary text-lg">2019</h1>
            <p>Honouarable Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
