import {Dimensions, Image, View} from 'react-native';
import {FC} from 'react';
import {styles} from './styles';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const AnimatedImage = Animated.createAnimatedComponent(Image);

const PinchGestureHandlerScreen: FC = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = e.scale;
      focalX.value = e.focalX;
      focalY.value = e.focalY;
    })
    .onEnd(() => (scale.value = withTiming(1)));

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: focalY.value},
        {translateX: focalX.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateY: -focalY.value},
        {translateX: -focalX.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pinchGesture}>
        <AnimatedImage
          source={{uri: 'https://picsum.photos/200/300'}}
          style={[styles.image, rStyle]}
        />
      </GestureDetector>
    </View>
  );
};

export default PinchGestureHandlerScreen;
