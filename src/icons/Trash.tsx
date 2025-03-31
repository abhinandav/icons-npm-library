import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrash = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#FE4D00"
      fillRule="evenodd"
      d="M11.333 3.332v-.667A1.333 1.333 0 0 0 10 1.332H6a1.333 1.333 0 0 0-1.333 1.333v.667h-2a.667.667 0 0 0 0 1.333h.666V12a2 2 0 0 0 2 2h5.334a2 2 0 0 0 2-2V4.665h.666a.667.667 0 1 0 0-1.333zM10 2.665H6v.667h4zm1.333 2H4.667V12a.667.667 0 0 0 .666.666h5.334a.667.667 0 0 0 .666-.666z"
      clipRule="evenodd"
    />
    <Path fill="#FE4D00" d="M6 6h1.333v5.333H6zm2.667 0H10v5.333H8.667z" />
  </Svg>
);
export default SvgTrash;
