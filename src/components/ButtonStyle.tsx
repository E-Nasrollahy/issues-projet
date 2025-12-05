import { Button } from "./ui/button";
import React from "react";
import { NavLink } from "react-router";

type propsType = {
  children: React.ReactNode;
  style?: "black" | "wight";
  path? : string
};

const ButtonStyle = ({ style = "black", children  , path}: propsType) => {
  let className: string = "";
  if (style === "wight") {
    className = "bg-white text-black border hover:bg-gray-300";
  }
  return (
    <Button className={`cursor-pointer w-full ${className}`}>
      {path ? <NavLink to={path}>{children}</NavLink> : children}
    </Button>
  );
};

export default ButtonStyle;
