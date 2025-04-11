import {Dimensions, View} from 'react-native';
import {FC} from 'react';
import Animated, {
  useDerivedValue,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {styles} from './styles';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Page from './components/page';

const WORDS = ["What's", 'up', 'mobile', 'devs?'];
const PAGE_WIDTH = Dimensions.get('window').width;

const ScrollViewFromScratch: FC = () => {
  const translateX = useSharedValue(0);
  const processingTranslateX = useSharedValue(0);

  const clampedTranslateX = useDerivedValue(() => {
    const maxTranslateX = -(PAGE_WIDTH * (WORDS.length - 1));

    return Math.max(Math.min(translateX.value, 0), maxTranslateX);
  });

  const panGesture = Gesture.Pan()
    .onStart(() => {
      processingTranslateX.value = clampedTranslateX.value;
    })
    .onUpdate(e => {
      translateX.value = processingTranslateX.value + e.translationX;
    })
    .onEnd(e => {
      translateX.value = withDecay({velocity: e.velocityX});
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={styles.wrapper}>
          {WORDS.map((title, i) => (
            <Page
              key={title}
              title={title}
              index={i}
              translateX={clampedTranslateX}
            />
          ))}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default ScrollViewFromScratch;
