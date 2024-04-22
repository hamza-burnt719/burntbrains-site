import React from "react";
import about from "../../../assets/images/about.png";
import colon from "../../../assets/images/colon.jpg";

function Qualification() {
  return (
    <div className="flex flex-row  px-5 pt-20">
      <div className="flex flex-col w-1/3 gap-5">
        <h1 className="pl-36">QUALIFICATIONS</h1>
        <h1 className="pl-36 pb-2 text-4xl font-semibold">My Education Backgrond</h1>
        <div className="flex flex-col gap-8 w-4/5 p-10 bg-black">
          <img className="size-7" src={colon} alt="img" />
          <p className="text-lg">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical.
          </p>
          <div className="flex flex-row gap-5">
            <img className="rounded-full size-10" src={about} alt="profile" />
            <div className="flex flex-col text-sm font-semibold">
              <h1>Steve Mark</h1>
              <h1 className="font-thin">Founder & Leader</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-1/3 ml-24">
        <div className="border-l border-gray-500 h-96 mt-20"></div>
        <div className="mt-20 ml-10 flex flex-col gap-1">
          <h1 className="text-3xl">M.Des in Product Design</h1>
          <p>National Institute of Design,</p>
          <p className="text-sm">Bengalur, India 2020-2022</p>
          <h1 className="mt-12 text-3xl">B.Tech in Computer Science</h1>
          <p>National Institute of Design,</p>
          <p className="text-sm">Bengalur, India 2020-2022</p>
          <h1 className="mt-12 text-3xl">Schools Certificate</h1>
          <p>National Institute of Design,</p>
          <p className="text-sm">Bengalur, India 2020-2022</p>
        </div>
      </div>
      <div className="flex justify-end w-1/3">
        <div className="flex flex-col gap-8 mt-36 w-4/5 p-10 bg-black">
          <img className="size-7" src={colon} alt="img" />
          <p className="text-lg">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical.
          </p>
          <div className="flex flex-row gap-5">
            <img className="rounded-full size-10" src={about} alt="profile" />
            <div className="flex flex-col text-sm font-semibold">
              <h1>Steve Mark</h1>
              <h1 className="font-thin">Founder & Leader</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
