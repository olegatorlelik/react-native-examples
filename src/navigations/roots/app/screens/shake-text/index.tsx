import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {FC, useState} from 'react';
import {styles} from './styles';
import Minus from '../../components/minus';
import Plus from '../../components/plus';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ShakeText: FC = () => {
  const [activeOption, setActiveOption] = useState(0);
  const shakeX = useSharedValue(0);

  const handleShake = () => {
    const transitionOffset = 20;
    const animationConfig = {
      duration: 80,
      easing: Easing.bezier(0.35, 0.7, 0.5, 0.7),
    };

    shakeX.value = withSequence(
      withTiming(transitionOffset),
      withRepeat(withTiming(-transitionOffset, animationConfig), 3, true),
      withSpring(0),
    );
  };

  const handleIncrement = () => {
    handleShake();
    setActiveOption(prevState => prevState + 1);
  };
  const handleDecrement = () => {
    handleShake();
    setActiveOption(prevState => prevState - 1);
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: shakeX.value}],
    };
  }, [shakeX]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Animated.View style={[styles.content, rStyle]}>
          <Text style={styles.counter}>{activeOption}</Text>
        </Animated.View>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={handleDecrement}>
            <Minus />
          </Pressable>
          <Pressable style={styles.button} onPress={handleIncrement}>
            <Plus />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShakeText;
