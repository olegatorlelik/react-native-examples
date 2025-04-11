import {FC} from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {styles} from './styles';
import Page from './components/page';

const WORDS = ["What's", 'up', 'mobile', 'devs?'];

const InterpolateScrollView: FC = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(e => {
    translateX.value = e.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      style={styles.container}
      horizontal
      onScroll={scrollHandler}
      scrollEventThrottle={16}>
      {WORDS.map((title, i) => (
        <Page key={title} title={title} index={i} translateX={translateX} />
      ))}
    </Animated.ScrollView>
  );
};

export default InterpolateScrollView;
