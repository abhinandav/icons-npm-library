import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAdd = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="#FE4D00"
      d="M23.997 17.33h-6.666v6.667a1.333 1.333 0 1 1-2.667 0v-6.666H7.997a1.333 1.333 0 1 1 0-2.667h6.667V7.997a1.333 1.333 0 1 1 2.667 0v6.667h6.666a1.333 1.333 0 1 1 0 2.667"
    />
  </Svg>
);
export default SvgAdd;
