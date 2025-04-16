import {useWindowDimensions, View} from 'react-native';
import {FC} from 'react';
import {styles} from './styles';
import Dots from './components/dots';
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
} from 'react-native-reanimated';

const DOTS_COUNT = 3;

const PageDots: FC = () => {
  const {width} = useWindowDimensions();

  const ref = useAnimatedRef<Animated.ScrollView>();
  const scrollViewOffset = useScrollViewOffset(ref);

  const activeIndex = useDerivedValue(() => {
    return Math.round(scrollViewOffset.value / width);
  }, [scrollViewOffset]);

  useDerivedValue(() => {
    console.log({s: activeIndex.value});
  });

  return (
    <View style={styles.wrapper}>
      <Animated.ScrollView
        ref={ref}
        snapToInterval={width}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        scrollEventThrottle={16}>
        {new Array(DOTS_COUNT).fill(null).map((_, i) => (
          <View key={i} style={[styles.item, {opacity: 1 - i * 0.1}]} />
        ))}
      </Animated.ScrollView>
      <Dots count={DOTS_COUNT} activeIndex={activeIndex} />
    </View>
  );
};

export default PageDots;
