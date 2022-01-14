import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import LogoPng from "./logo.png"

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
      <image href={LogoPng}/>
    </Svg>
  );
};

export default Icon;
