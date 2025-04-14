import {FC} from 'react';
import {styles} from './styles';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface IProps {
  index: number;
  progressValue: SharedValue<number>;
}

const Item: FC<IProps> = ({index, progressValue}) => {
  const rStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      progressValue.value,
      [0, 1],
      [0, index * 25],
    );

    const translateY = interpolate(
      progressValue.value,
      [0, 1],
      [0, -index * 5],
    );

    const rotate = interpolate(
      progressValue.value,
      [0, 1],
      [-index * 10, index * 10],
    );

    return {
      transform: [{translateX}, {translateY}, {rotate: `${rotate}deg`}],
      zIndex: -index,
    };
  }, [progressValue]);

  return <Animated.View style={[styles.card, rStyle]} />;
};

export default Item;
