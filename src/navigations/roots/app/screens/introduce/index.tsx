import {View} from 'react-native';
import {FC, useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';

const Introduce: FC = () => {
  const progress = useSharedValue(0);
  const scale = useSharedValue(1);

  const reanimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{scale: scale.value}],
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(1);
    scale.value = withSpring(2);
  }, [progress, scale]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, reanimatedStyles]} />
    </View>
  );
};

export default Introduce;
