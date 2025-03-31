import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTags = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592-3.592a2.41 2.41 0 0 0 0-3.408l-5.71-5.71A2 2 0 0 0 9.172 6H5a2 2 0 0 0-2 2"
    />
    <Path
      stroke={props.color || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.002 19 1.592-1.592a4.82 4.82 0 0 0 0-6.816L15.002 6m-8 4h-.01"
    />
  </Svg>
);

export default SvgTags;
