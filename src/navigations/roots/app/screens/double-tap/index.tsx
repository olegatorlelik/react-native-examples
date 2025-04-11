import {FC} from 'react';
// @ts-ignore
import HeartIcon from './assets/heart.png';
import {styles} from './styles';
import {Image, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const DoubleTap: FC = () => {
  const scale = useSharedValue(1);
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(
      () =>
        (scale.value = withSpring(0.3, undefined, isFinished => {
          if (!isFinished) {
            return;
          }

          scale.value = withDelay(500, withSpring(1));
        })),
    );

  const rHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={doubleTap}>
        <AnimatedImage
          source={HeartIcon}
          style={[styles.heart, rHeartStyle]}
          resizeMode="center"
        />
      </GestureDetector>
    </View>
  );
};

export default DoubleTap;
