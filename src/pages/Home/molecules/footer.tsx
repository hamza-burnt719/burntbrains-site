import React from "react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../../assets/icons/logo.svg";
import Navbar from "components/Navbar";

const Footer = () => (
  <div className="flex flex-row bg-black mt-10 mb-10 pb-5 pt-20 px-32">
    <div className="flex flex-col w-1/2 gap-2">
      <p className="text-4xl">
        Have an idea? I can help you to Start your project
      </p>
      <p className="text-eeTertiory pt-12">
        Say hello to Us <WavingHandIcon />
      </p>
      <p className="text-lg font-bold">Hr@burntbrains.com</p>
      <p className="text-xs text-eeSecondary mt-20">
        2024 BURNTBRAINS.<span className="underline">POLICY</span>{" "}
        <span className="underline">CAREERS</span>
      </p>
    </div>
    <div className="flex flex-col gap-10 w-1/2 -mt-14 pl-40">
      <img className="size-40" src={logo} alt="logo" />
      <div className="flex flex-row gap-5">
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </div>
      <div className="flex mt-20 -ml-20 text-sm">
        <Navbar />
      </div>
    </div>
  </div>
);

export default Footer;
