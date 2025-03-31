import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEmail = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Path
      fill="#FE4D00"
      d="M38 8H10a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h28a6 6 0 0 0 6-6V14a6 6 0 0 0-6-6m-1.34 4L24 21.5 11.34 12zM38 36H10a2 2 0 0 1-2-2V14.5l14.8 11.1a2 2 0 0 0 2.4 0L40 14.5V34a2 2 0 0 1-2 2"
    />
  </Svg>
);
export default SvgEmail;
