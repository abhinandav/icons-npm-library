import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSend = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FE4D00"
      d="M19.42 3.671a1.37 1.37 0 0 0-.656-.382 1.33 1.33 0 0 0-.749.032L4.038 8.201c-.259.086-.488.25-.658.473s-.273.492-.297.775.034.568.165.818c.13.25.33.453.57.584l5.8 3 2.866 6.09c.115.238.291.439.509.578.217.14.468.213.723.212h.096c.273-.021.534-.128.749-.306s.373-.42.454-.694l4.73-14.59c.084-.252.098-.524.04-.784a1.43 1.43 0 0 0-.366-.686M4.63 9.581l12.2-4.26-6.773 7.09zm9.153 9.57-2.713-5.68 6.773-7.09z"
    />
  </Svg>
);
export default SvgSend;
