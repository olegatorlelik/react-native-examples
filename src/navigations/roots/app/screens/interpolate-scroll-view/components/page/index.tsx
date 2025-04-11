import {FC} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {styles} from './styles';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface IProps {
  title: string;
  index: number;
  translateX: SharedValue<number>;
}

const {width, height} = Dimensions.get('window');

const Page: FC<IProps> = ({index, translateX, title}) => {
  const inputRange = [width * (index - 1), width * index, width * (index + 1)];

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [-200, 0, 200],
    );

    return {
      transform: [{translateY}],
    };
  });
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP,
    );

    const borderRadius = interpolate(translateX.value, inputRange, [
      height,
      0,
      -height / 2,
    ]);

    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  return (
    <View
      style={[
        styles.page,
        {backgroundColor: `rgba(0, 0, 256, 0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[styles.textWrapper, rTextStyle]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default Page;
