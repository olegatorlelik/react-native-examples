import {ITEM_SIZE, styles} from './styles';
import {View} from 'react-native';
import {FC} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

interface IProps {
  n: number;
  i: number;
  progress: SharedValue<number>;
}

const Item: FC<IProps> = ({n, progress, i}) => {
  const offsetAngle = (2 * Math.PI) / n;
  const finalAngle = offsetAngle * (n - 1 - i);

  const rotate = useDerivedValue(() => {
    if (progress.value <= 2 * Math.PI) {
      return Math.min(finalAngle, progress.value);
    }

    if (progress.value - 2 * Math.PI < finalAngle) {
      return finalAngle;
    }

    return progress.value;
  }, []);

  const translateY = useDerivedValue(() => {
    if (rotate.value === finalAngle) {
      return withSpring(-n * ITEM_SIZE);
    }

    return -i * ITEM_SIZE;
  }, []);

  const rStyleItem = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: `${rotate.value}rad`},
        {translateY: translateY.value},
      ],
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.item,
        {
          opacity: (i + 1) / n,
        },
        rStyleItem,
      ]}
    />
  );
};

export default Item;
