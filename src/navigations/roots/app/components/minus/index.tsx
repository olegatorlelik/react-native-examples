import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  size?: number;
  color?: string;
}

const MinusIcon: FC<IProps> = ({size = 24, color = '#fff'}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M5 12h14" />
  </Svg>
);

export default MinusIcon;
