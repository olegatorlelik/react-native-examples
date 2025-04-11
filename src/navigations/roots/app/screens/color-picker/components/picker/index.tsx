import {FC} from 'react';
import {CIRCLE_PICKER_SIZE, GRADIENT_WIDTH, styles} from './styles';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const X_RANGE = GRADIENT_WIDTH - CIRCLE_PICKER_SIZE;

interface IProps extends LinearGradientProps {}

const Picker: FC<IProps> = props => {
  const translateX = useSharedValue(0);
  const tempTranslateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const positionCircle = useDerivedValue(() => {
    return Math.min(Math.max(translateX.value, 0), X_RANGE);
  });

  const panHandler = Gesture.Pan()
    .onStart(() => {
      tempTranslateX.value = positionCircle.value;
    })
    .onUpdate(e => {
      translateX.value = tempTranslateX.value + e.translationX;
    })
    .onEnd(() => (translateY.value = withTiming(0, {duration: 300})));

  const tapHandler = Gesture.LongPress()
    .minDuration(1)
    .onStart(e => {
      translateX.value = withSpring(e.x - CIRCLE_PICKER_SIZE / 2);
      scale.value = withTiming(1.2, {duration: 100});
      translateY.value = withSpring(-CIRCLE_PICKER_SIZE / 2);
    })
    .onEnd(() => {
      scale.value = withSpring(1);
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: positionCircle.value},
        {scale: scale.value},
        {translateY: translateY.value},
      ],
    };
  });

  const rInternalPickerStyle = useAnimatedStyle(() => {
    const inputRange = props.colors.map(
      (_, index, array) => (index / array.length) * GRADIENT_WIDTH,
    );

    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      props.colors as string[],
    );

    return {
      backgroundColor,
    };
  });

  const composed = Gesture.Simultaneous(panHandler, tapHandler);

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={styles.picker}>
        <LinearGradient {...props} style={styles.gradient} />
        <Animated.View style={[styles.circlePicker, rStyle]}>
          <Animated.View
            style={[styles.internalPicker, rInternalPickerStyle]}
          />
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default Picker;
