import {FC, useState} from 'react';
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';
import {Switch} from 'react-native';

const colors = {
  dark: {
    background: '#121212',
    circle: '#2c2c34',
    text: '#FFFFFF',
  },
  light: {
    background: '#FFFFFF',
    circle: '#d5e1f8',
    text: '#000000',
  },
};

const switchTrackColor = {
  true: 'rgba(30, 136, 229, 0.7)', // Semi-transparent blue (matches the circle in dark mode)
  false: 'rgba(176, 190, 197, 0.5)', // Soft gray with some transparency
};

type TTheme = keyof typeof colors;

const InterpolateColor: FC = () => {
  const [theme, setTheme] = useState<TTheme>('light');
  const progress = useDerivedValue(() => {
    return theme === 'light' ? withTiming(0) : withTiming(1);
  }, [theme]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.background, colors.dark.background],
    );

    return {
      backgroundColor,
    };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.circle, colors.dark.circle],
    );

    return {
      backgroundColor,
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [colors.light.text, colors.dark.text],
    );

    return {
      color,
    };
  });

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Animated.Text style={[styles.text, rTextStyle]}>Theme</Animated.Text>
      <Animated.View style={[styles.circle, rCircleStyle]}>
        <Switch
          trackColor={switchTrackColor}
          onValueChange={isActive => setTheme(isActive ? 'dark' : 'light')}
          value={theme === 'dark'}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default InterpolateColor;
