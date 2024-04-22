import React from "react";
import colon from "../../../assets/images/colon.jpg";
import about from "../../../assets/images/about.png";
import Button from '@mui/material/Button';

const AboutMe = () => {
  return (
    <div className="flex flex-row px-40 pb-10 pt-20 gap-20">
      <div className="flex flex-col gap-5 pb-10 w-2/5">
        <h1>ABOUT ME</h1>
        <p className="flex text-3xl">What people are saying about me</p>
        <div className="flex flex-col gap-8 p-10 bg-black">
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
      <div className="flex flex-col gap-5 text-lg w-3/5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tempor,
          malesuada adipiscing congue diam. Quis orci amet porttitor blandit
          amet nullam sit. Elit, purus blandit non ut non quam curabitur.
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tempor,
          malesuada adipiscing congue diam. Quis orci amet porttitor blandit
          amet nullam sit. Elit, purus blandit non ut non quam curabitur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tempor,
          malesuada adipiscing congue diam. Quis orci amet porttitor blandit
          amet nullam sit. Elit, purus blandit non ut non quam curabitur. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Neque tempor,
          malesuada adipiscing congue diam. Quis orci amet porttitor blandit
          amet nullam sit. Elit, purus blandit non ut non quam curabitur.
        </p>
        <div className="flex justify-end mt-10 ">
          <Button sx={{borderRadius:"30px" , backgroundImage: "linear-gradient(to right, #0B0A0C 0%, #C96436 100%)" , padding:"15px" , paddingX:"30px"}} variant="contained">Hire Me</Button>  
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
