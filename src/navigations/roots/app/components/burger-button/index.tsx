import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Line} from 'react-native-svg';

type TProps = {
  onPress: () => void;
  color?: string;
  size?: number;
};

const BurgerMenu: FC<TProps> = ({size = 30, color = 'black', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={size} height={size} viewBox="0 0 30 30">
        <Line
          x1="5"
          y1="8"
          x2="25"
          y2="8"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <Line
          x1="5"
          y1="15"
          x2="25"
          y2="15"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <Line
          x1="5"
          y1="22"
          x2="25"
          y2="22"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default BurgerMenu;
