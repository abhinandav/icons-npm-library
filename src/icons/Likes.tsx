import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLikes = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 4A5.5 5.5 0 0 0 2 9.5C2 15 8.5 20 12 21.163 15.5 20 22 15 22 9.5a5.5 5.5 0 0 0-10-3.163A5.5 5.5 0 0 0 7.5 4"
    />
  </Svg>
);

export default SvgLikes;
