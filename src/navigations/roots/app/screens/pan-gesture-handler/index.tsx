import {View} from 'react-native';
import {FC} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {styles} from './styles';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

const PanGestureHandlerScreen: FC = () => {
  const translateX = useSharedValue(0);
  const initialX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const initialY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      translateX.value = initialX.value;
      translateY.value = initialY.value;
    })
    .onUpdate(event => {
      translateX.value = initialX.value + event.translationX;
      translateY.value = initialY.value + event.translationY;
    })
    .onEnd(() => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    });

  const rStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <View style={styles.border}>
          <Animated.View style={[styles.box, rStyles]} />
        </View>
      </GestureDetector>
    </View>
  );
};

export default PanGestureHandlerScreen;
