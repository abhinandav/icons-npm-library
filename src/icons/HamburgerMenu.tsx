import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from "react-native-svg";
const SvgHamburgerMenu = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={29}
    fill="none"
    {...props}
  >
    <G filter="url(#hamburger_menu_svg__a)">
      <Path
        fill="#FE4D00"
        d="M22 17.5a1.5 1.5 0 0 1 .144 2.993L22 20.5H6a1.5 1.5 0 0 1-.144-2.993L6 17.5zm0-7a1.5 1.5 0 1 1 0 3H6a1.5 1.5 0 1 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1 0-3z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgHamburgerMenu;
