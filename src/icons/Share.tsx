import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.5 6.5-5 3.5m5 7.5-5-3.5m0-2a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m10 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0-13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </Svg>
);
export default SvgShare;
