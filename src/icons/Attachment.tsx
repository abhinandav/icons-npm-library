import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAttachment = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#attachment_svg__a)">
      <Path
        fill="#000"
        d="M5.637 10.587a3.5 3.5 0 1 1 4.95-4.95l7.778 7.778a3.5 3.5 0 1 1-4.95 4.95l-4.066-4.066a1.25 1.25 0 0 1 1.768-1.768l3.712 3.713a1 1 0 1 0 1.415-1.415l-3.713-3.712a3.25 3.25 0 0 0-4.596 4.596l4.066 4.066a5.5 5.5 0 1 0 7.778-7.778l-7.778-7.778a5.5 5.5 0 1 0-7.778 7.778l.353.353a1 1 0 1 0 1.415-1.413z"
      />
    </G>
    <Defs>
      <ClipPath id="attachment_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgAttachment;
