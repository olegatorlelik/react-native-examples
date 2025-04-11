import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BellIcon = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
      stroke="currentColor"
      strokeWidth={2}
    />
    <Path
      d="M13.73 21a2 2 0 0 1-3.46 0"
      stroke="currentColor"
      strokeWidth={2}
    />
  </Svg>
);

export default BellIcon;
