import { StyleProp, useWindowDimensions, ViewStyle } from 'react-native';
import {FC, PropsWithChildren} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  measure,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';

interface IProps {
  style: StyleProp<ViewStyle>;
}

const Ripple: FC<PropsWithChildren<IProps>> = ({children, style}) => {
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const scale = useSharedValue(0);
  const rippleOpacity = useSharedValue(0);
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const aRef = useAnimatedRef();

  const panGesture = Gesture.Tap()
    .onStart(e => {
      const layout = measure(aRef);

      width.value = layout?.width ?? 0;
      height.value = layout?.height ?? 0;

      centerX.value = e.x;
      centerY.value = e.y;
      rippleOpacity.value = 1;
      scale.value = 0;
      scale.value = withTiming(1);
    })
    .onEnd(() => {
      rippleOpacity.value = withTiming(0);
    });

  const rStyle = useAnimatedStyle(() => {
    // const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2);
    const circleRadius = 20;
    const translateX = centerX.value - circleRadius;
    const translateY = centerY.value - circleRadius;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      backgroundColor: 'red',
      opacity: rippleOpacity.value,
      position: 'absolute',
      top: 0,
      left: 0,
      transform: [{translateX}, {translateY}, {scale: scale.value}],
    };
  });

  return (
    <Animated.View ref={aRef} style={style}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={styles.wrapper}>
          <Animated.View style={rStyle} />
          <>{children}</>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
};

export default Ripple;
