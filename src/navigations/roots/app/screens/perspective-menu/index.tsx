import {Dimensions, SafeAreaView} from 'react-native';
import {FC} from 'react';
import {styles} from './styles';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BurgerMenu from '../../components/burger-button';

const {width, height} = Dimensions.get('window');

const PerspectiveMenu: FC = () => {
  const rotate = useSharedValue(0);
  const translateX = useSharedValue(0);
  const prevTranslateX = useSharedValue(0);

  const pinchGesture = Gesture.Pan()
    .onStart(() => (prevTranslateX.value = translateX.value))
    .onChange(e => {
      if (translateX.value === 0 && e.translationX <= 0) {
        return;
      }

      translateX.value = e.translationX + prevTranslateX.value;
    })
    .onEnd(() => {
      if (translateX.value > width / 2) {
        return;
      }

      translateX.value = withTiming(0);
    });

  const rStyle = useAnimatedStyle(() => {
    const iRotate = interpolate(
      translateX.value,
      [0, width / 2],
      [0, 2],
      Extrapolation.CLAMP,
    );

    return {
      transform: [
        {translateX: translateX.value},
        {perspective: 100},
        {rotateY: `-${iRotate}deg`},
      ],
    };
  });

  return (
    <SafeAreaView style={styles.perspectiveMenu}>
      <GestureDetector gesture={pinchGesture}>
        <Animated.View style={[styles.container, rStyle]}>
          <BurgerMenu color="#fff" onPress={() => console.log('something')} />
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default PerspectiveMenu;
