import {FC, useEffect} from 'react';
import {styles} from './styles';
import {Dimensions, Pressable, Text, View} from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CIRCLE_LENGTH = 1000; // 2PI*R

const R = CIRCLE_LENGTH / (2 * Math.PI);
const {width, height} = Dimensions.get('window');

const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#A6E1FA';

const CircularProgress: FC = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, {duration: 2000});
  }, [progress]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: CIRCLE_LENGTH * (-1 * progress.value),
    };
  });

  return (
    <View style={styles.container}>
      <Svg>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
          fill="transparent"
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          fill="transparent"
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
        />
      </Svg>
      <Animated.View />
      <Pressable>
        <Text>Run</Text>
      </Pressable>
    </View>
  );
};

export default CircularProgress;
