import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKebabMenu = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#FE4D00"
      d="M5.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3.001 0A1.5 1.5 0 0 0 4.5 10m1-7.437a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3.001 0 1.5 1.5 0 0 0 3.001 0m1 14.873a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3.001.001 1.5 1.5 0 0 0 3.001 0"
    />
  </Svg>
);
export default SvgKebabMenu;
