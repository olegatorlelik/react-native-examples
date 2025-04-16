import styles from './styles';
import {FC} from 'react';
import Animated from 'react-native-reanimated';
import {TDay} from './components/item';
import Item from './components/item';

type TWeek = TDay[];

type TProps = {
  activeWeek: TWeek;
};

const WeeklyBarChart: FC<TProps> = ({activeWeek}) => {
  return (
    <Animated.View style={styles.weeklyBarChart}>
      {activeWeek.map(({value}) => (
        <Item key={value} value={value} />
      ))}
    </Animated.View>
  );
};

export default WeeklyBarChart;
