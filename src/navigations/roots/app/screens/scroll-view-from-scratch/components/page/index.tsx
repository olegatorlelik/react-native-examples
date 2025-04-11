import {FC} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {styles} from './styles';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

interface IProps {
  title: string;
  index: number;
  translateX: SharedValue<number>;
}

const {width, height} = Dimensions.get('window');

const Page: FC<IProps> = ({index, translateX, title}) => {
  const pageOffset = width * index;
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value + pageOffset}],
    };
  });

  return (
    <Animated.View
      style={[
        styles.page,
        {backgroundColor: `rgba(0, 0, 256, 0.${index + 2})`},
        rStyle,
      ]}>
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  );
};

export default Page;
