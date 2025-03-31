import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOpportunity = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FE4D00"
      fillRule="evenodd"
      d="M6.768 12.666c-2.422-3.791.269-8.791 4.732-8.791 4.464 0 7.155 5 4.733 8.791L13.467 17H9.534zm1.025 5.064-2.582-4.046C1.99 8.644 5.569 2 11.5 2c5.93 0 9.507 6.644 6.289 11.684l-2.583 4.046v1.77c0 .663-.26 1.299-.724 1.768a2.46 2.46 0 0 1-1.747.732h-2.471a2.46 2.46 0 0 1-1.748-.732 2.52 2.52 0 0 1-.724-1.768zm1.854 1.145v.625c0 .166.065.325.18.442a.61.61 0 0 0 .438.183h2.471a.61.61 0 0 0 .437-.183.63.63 0 0 0 .18-.442v-.625z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgOpportunity;
