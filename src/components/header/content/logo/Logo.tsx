import Image from "next/image";
import React from "react";
import icon from "../../../../../public/global/logo.png";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <Image className="logo" src={icon} alt="logo" />
    </div>
  );
};

export default Logo;