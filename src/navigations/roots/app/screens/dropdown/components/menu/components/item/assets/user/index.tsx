import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const UserIcon = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={7} r={4} stroke="currentColor" strokeWidth={2} />
    <Path
      d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"
      stroke="currentColor"
      strokeWidth={2}
    />
  </Svg>
);

export default UserIcon;
