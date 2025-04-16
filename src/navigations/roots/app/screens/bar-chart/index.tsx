import styles from './styles';
import {SafeAreaView, Text, useWindowDimensions, View} from 'react-native';
import {data} from './constants';
import WeeklyBarChart from './components/weekly-bar-chart';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedRef,
  useScrollViewOffset,
} from 'react-native-reanimated';
import {useState} from 'react';

const BarChart = () => {
  const {width} = useWindowDimensions();

  const [activeIndex, setActiveIndex] = useState(0);

  const ref = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(ref);

  useAnimatedReaction(
    () => Math.round(scrollOffset.value / width),
    (prepared, previous) => {
      if (prepared !== previous) {
        runOnJS(setActiveIndex)(prepared);
      }
    },
  );

  const activeWeek = data[activeIndex];

  return (
    <SafeAreaView style={styles.barChart}>
      <View style={styles.wrapper}>
        <WeeklyBarChart activeWeek={activeWeek} />
        <Animated.ScrollView
          ref={ref}
          decelerationRate="fast"
          scrollEventThrottle={16}
          snapToInterval={width}
          disableIntervalMomentum
          snapToAlignment="center"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}>
          {data.map((item, index) => (
            <View style={styles.day} key={index}>
              <Text style={styles.text}>{item[0].day.toDateString()}</Text>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BarChart;
