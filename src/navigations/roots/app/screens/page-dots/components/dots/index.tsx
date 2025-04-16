import {View} from 'react-native';
import {FC} from 'react';
import {styles} from './styles';
import Item from './components/item';
import Animated, {
  DerivedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {DOT_SIZE, CONTAINER_GAP} from './constants';

type TProps = {
  count: number;
  activeIndex: DerivedValue<number>;
};

const Dots: FC<TProps> = ({count, activeIndex}) => {
  const rStyleProgress = useAnimatedStyle(() => {
    return {
      left: CONTAINER_GAP / 2,
      width: withSpring(
        DOT_SIZE * (activeIndex.value + 1) +
          CONTAINER_GAP * (activeIndex.value + 1),
      ),
    };
  }, []);

  return (
    <View style={styles.dots}>
      {new Array(count).fill(null).map((_, i) => (
        <Item key={i} activeIndex={activeIndex} i={i} />
      ))}
      <Animated.View style={[styles.progress, rStyleProgress]} />
    </View>
  );
};

export default Dots;
