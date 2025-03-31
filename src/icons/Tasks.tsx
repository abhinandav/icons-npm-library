import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTasks = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#FE4D00" clipPath="url(#tasks_svg__a)">
      <Path d="M19.53 22.666H4.475a1.134 1.134 0 0 1-1.14-1.127V4.459a1.167 1.167 0 0 1 1.333-1.127h1.334v1.334H4.669v16.666h14.667V4.666h-1.333V3.332h1.5a1.133 1.133 0 0 1 1.166 1.127v17.08a1.135 1.135 0 0 1-1.14 1.127" />
      <Path d="m11.106 17.171-3.574-3.573a.667.667 0 0 1 .947-.933l2.627 2.626 5.76-5.76a.667.667 0 0 1 .94.94zM17.33 7.333H6.665V4.887a1.56 1.56 0 0 1 1.553-1.554h1.194a2.667 2.667 0 0 1 5.166 0h1.194a1.56 1.56 0 0 1 1.56 1.554zM7.998 6h8V4.887a.22.22 0 0 0-.22-.22h-2.446V4a1.333 1.333 0 1 0-2.667 0v.667H8.217a.22.22 0 0 0-.22.22z" />
    </G>
    <Defs>
      <ClipPath id="tasks_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgTasks;
