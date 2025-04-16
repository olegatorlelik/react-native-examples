import {View} from 'react-native';
import styles from './styles';
import Gradient from './components/gradient';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {CARD_PROFILE_HEIGHT, CARD_PROFILE_WIDTH} from './constants';

const CardProfile = () => {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const gesture = Gesture.Pan().onChange(({x, y}) => {
    rotateX.value = interpolate(
      x,
      [0, CARD_PROFILE_WIDTH],
      [10, -10],
      Extrapolation.CLAMP,
    );
    rotateY.value = interpolate(
      y,
      [0, CARD_PROFILE_HEIGHT],
      [10, -10],
      Extrapolation.CLAMP,
    );
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          perspective: 800,
        },
        {
          rotateX: `${rotateX.value}deg`,
        },
        {
          rotateY: `${rotateY.value}deg`,
        },
      ],
    };
  });

  return (
    <View style={styles.component}>
      <View style={styles.wrapper}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.cardProfile, rStyle]} />
        </GestureDetector>
      </View>
      <Gradient />
    </View>
  );
};

export default CardProfile;
