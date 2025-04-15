import {SafeAreaView, View} from 'react-native';
import {FC} from 'react';
import {styles} from './styles';
import {CARD_WIDTH, stories} from './constants';
import Card from './components/card';
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from 'react-native-reanimated';

const StoryList: FC = () => {
  const scrollViewAnimatedRef = useAnimatedRef<Animated.ScrollView>();

  const scroll = useScrollViewOffset(scrollViewAnimatedRef);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Animated.ScrollView
          snapToInterval={CARD_WIDTH}
          ref={scrollViewAnimatedRef}
          horizontal
          decelerationRate="fast"
          disableIntervalMomentum
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.containerList}>
          {stories.map(({image}, i) => (
            <Card key={i} image={image} index={i} scrollOffset={scroll} />
          ))}
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StoryList;
