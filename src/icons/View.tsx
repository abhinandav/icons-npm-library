import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgView = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#FE4D00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#view_svg__a)"
    >
      <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8" />
      <Path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </G>
    <Defs>
      <ClipPath id="view_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgView;
