import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSort = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FE4D00"
      d="M6.296 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8.003 7.414V19a1 1 0 1 1-2 0V7.414L3.71 9.707a1 1 0 0 1-1.414-1.414zm9.707 12.293V5a1 1 0 0 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414z"
    />
  </Svg>
);
export default SvgSort;
