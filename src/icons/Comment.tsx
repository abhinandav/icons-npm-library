import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComment = (props) => (
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
      d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1"
    />
  </Svg>
);
export default SvgComment;
