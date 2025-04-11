import {SafeAreaView, Text, View} from 'react-native';
import {FC, useState} from 'react';
import {
  BUTTON_WIDTH,
  COUNTER_ROUND_SIZE,
  DEFAULT_HORIZONTAL_PADDING,
  styles,
} from './styles';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Minus from '../../components/minus';
import Plus from '../../components/plus';

const MAX_SLIDE_OFFSET =
  BUTTON_WIDTH / 2 - COUNTER_ROUND_SIZE / 2 - DEFAULT_HORIZONTAL_PADDING;

const clamp = (value: number, min: number, max: number): number => {
  'worklet';
  return Math.min(Math.max(value, min), max);
};

const SlidingCounter: FC = () => {
  const [count, setCount] = useState(0);
  const translateX = useSharedValue(0);

  const incrementWrap = () => setCount(prevValue => prevValue + 1);
  const decrementWrap = () => setCount(prevValue => prevValue - 1);

  const gestureDetector = Gesture.Pan()
    .onChange(e => {
      translateX.value = clamp(
        e.translationX,
        -MAX_SLIDE_OFFSET,
        MAX_SLIDE_OFFSET,
      );
    })
    .onEnd(() => {
      if (translateX.value === -MAX_SLIDE_OFFSET) {
        runOnJS(decrementWrap)();
      } else if (translateX.value === MAX_SLIDE_OFFSET) {
        runOnJS(incrementWrap)();
      }

      translateX.value = withSpring(0, {stiffness: 200});
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const rStylePlusMinus = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [-MAX_SLIDE_OFFSET, 0, MAX_SLIDE_OFFSET],
      [0.4, 1, 0.4],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Animated.View style={rStylePlusMinus}>
          <Minus />
        </Animated.View>
        <GestureDetector gesture={gestureDetector}>
          <Animated.View style={[styles.counter, rStyle]}>
            <Text style={styles.title}>{count}</Text>
          </Animated.View>
        </GestureDetector>
        <Animated.View style={rStylePlusMinus}>
          <Plus />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlidingCounter;
