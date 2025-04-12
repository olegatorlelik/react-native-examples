import {StyleProp, ViewStyle} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {FC, PropsWithChildren} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

interface IProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const PressableScale: FC<PropsWithChildren<IProps>> = ({
  style,
  onPress,
  children,
}) => {
  const scale = useSharedValue(1);

  const gesture = Gesture.Tap()
    .maxDuration(10000)
    .onTouchesDown(() => {
      scale.value = withTiming(0.85, {duration: 500});
    })
    .onTouchesUp(() => {
      runOnJS(onPress)();
    })
    .onFinalize(() => {
      scale.value = withTiming(1, {duration: 500});
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[style, rStyle]}>{children}</Animated.View>
    </GestureDetector>
  );
};

export default PressableScale;
