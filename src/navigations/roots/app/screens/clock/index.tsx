import {View} from 'react-native';
import {FC, useEffect} from 'react';
import {styles} from './styles';
import {Easing, useSharedValue, withTiming} from 'react-native-reanimated';
import Item from './item';

const COUNTS = 12;

const Clock: FC = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(4 * Math.PI, {
      duration: 8000,
      easing: Easing.linear,
    });
  }, [progress]);

  return (
    <View style={styles.container}>
      {new Array(COUNTS).fill(0).map((_, i) => {
        return <Item key={i} i={i} n={COUNTS} progress={progress} />;
      })}
    </View>
  );
};

export default Clock;
