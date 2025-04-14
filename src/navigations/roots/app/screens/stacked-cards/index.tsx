import {SafeAreaView} from 'react-native';
import {FC} from 'react';
import {styles} from './styles';
import Animated, {
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Item from './components/item';

const StackedCards: FC = () => {
  const progress = useSharedValue(0);

  const gesture = Gesture.Tap()
    .maxDuration(10000)
    .onTouchesDown(() => {
      progress.value = withSpring(1);
    })
    .onTouchesUp(() => {
      progress.value = withSpring(0);
    })
    .onFinalize(() => {
      progress.value = withSpring(0);
    });

  return (
    <SafeAreaView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={styles.wrapper}>
          {new Array(4).fill(null).map((_, i) => (
            <Item index={i} progressValue={progress} />
          ))}
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default StackedCards;
