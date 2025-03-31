import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClose = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Circle cx={7.5} cy={7.5} r={7.5} fill="#FE4D00" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.915}
      d="m10.231 4.746-5.489 5.49M4.742 4.746l5.49 5.49"
    />
  </Svg>
);
export default SvgClose;
