import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSearch = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FE4D00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.667}
      d="m28 28-8-8M4 13.333a9.333 9.333 0 1 0 18.666 0 9.333 9.333 0 0 0-18.666 0"
    />
  </Svg>
);
export default SvgSearch;
