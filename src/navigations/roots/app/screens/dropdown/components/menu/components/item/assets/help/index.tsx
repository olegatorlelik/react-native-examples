import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const HelpCircleIcon = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} />
    <Path
      d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4"
      stroke="currentColor"
      strokeWidth={2}
    />
    <Path d="M12 17h.01" stroke="currentColor" strokeWidth={2} />
  </Svg>
);

export default HelpCircleIcon;
