import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCalls = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Path
      fill="#FE4D00"
      d="M11.145 15.775C10.572 12 13.233 8.61 17.298 7.369a2.97 2.97 0 0 1 3.642 1.794l1.305 3.48a3 3 0 0 1-.78 3.264l-3.882 3.555a1.5 1.5 0 0 0-.456 1.41l.036.156.093.39a22 22 0 0 0 2.187 5.415 21.9 21.9 0 0 0 3.888 4.88l.12.109a1.5 1.5 0 0 0 1.446.309l5.019-1.581a3 3 0 0 1 3.216.957l2.376 2.883c.99 1.2.87 2.964-.267 4.023-3.111 2.9-7.39 3.495-10.365 1.104a38.1 38.1 0 0 1-9.072-10.587 37.2 37.2 0 0 1-4.66-13.155m9.126 5.295 3.216-2.952a6 6 0 0 0 1.563-6.528l-1.302-3.48a5.97 5.97 0 0 0-7.326-3.61c-5.05 1.546-9.102 6.073-8.244 11.728.6 3.948 1.983 8.97 5.034 14.214a41.1 41.1 0 0 0 9.786 11.415c4.464 3.585 10.422 2.36 14.292-1.245a5.94 5.94 0 0 0 .537-8.124l-2.376-2.886a6 6 0 0 0-6.432-1.908l-4.167 1.31a19.8 19.8 0 0 1-2.808-3.668 19 19 0 0 1-1.77-4.263"
    />
  </Svg>
);
export default SvgCalls;
