import React from "react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import James from '../../../assets/images/James Robertson.png'
import Navbar from "components/Navbar";

const Footer = () => (
  <div className="flex flex-row bg-black mt-10 pb-5 pt-20 px-32">
    <div className="flex flex-col w-1/2 gap-2">
      <p className="text-4xl">
        Have an idea? I can help you to Start your project
      </p>
      <p className="text-eeTertiory pt-10">
        Say hello to Us <WavingHandIcon />
      </p>
      <p className="text-lg font-bold">james@finsweet.com</p>
      <p className="text-xs text-eeSecondary mt-20">
        2024 BURNTBRAINS.<span className="underline">POLICY</span>{" "}
        <span className="underline">CAREERS</span>
      </p>
    </div>
    <div className="flex flex-col gap-10 mt-10 pl-40">
      <div className="flex flex-row gap-5">
        <img className="rounded-full size-16" src={James} alt="profile" />
        <div className="flex flex-col text-base font-bold">
          <h1>James Robertson</h1>
          <h1 className="font-thin">Webflow Developer</h1>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <FacebookRoundedIcon />
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <div className="flex mt-7 -mr-24 text-sm">
        <Navbar />
      </div>
    </div>
  </div>
);

export default Footer;
