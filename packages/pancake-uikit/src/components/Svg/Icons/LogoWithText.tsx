import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import LogoText from "./logo-text.png"

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 1281 199" {...props}>
      <image href={LogoText}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
