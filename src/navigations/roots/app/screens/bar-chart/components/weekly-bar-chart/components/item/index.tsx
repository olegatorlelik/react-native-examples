import {useWindowDimensions} from 'react-native';
import {DAYS_COUNT_IN_WEEK, GAP, BAR_HEIGHT} from '../../../../constants';
import styles from './styles';
import {FC, useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export type TDay = {
  value: number;
};

const Item: FC<TDay> = ({value}) => {
  const {width: wWidth} = useWindowDimensions();

  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    height.value = withTiming(value * BAR_HEIGHT);
    opacity.value = withTiming(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      height: height.value,
      width:
        (wWidth * 0.9 - GAP * (DAYS_COUNT_IN_WEEK - 1)) / DAYS_COUNT_IN_WEEK,
    };
  }, []);

  return <Animated.View style={[styles.item, rStyle]} />;
};

export default Item;
