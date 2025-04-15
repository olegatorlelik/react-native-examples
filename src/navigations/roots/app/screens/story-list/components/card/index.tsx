import {FC} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Dimensions, Image, ImageProps} from 'react-native';
import {styles} from './styles';
import {CARD_WIDTH} from '../../constants';

type TProps = {
  image: ImageProps['source'];
  index: number;
  scrollOffset: SharedValue<number>;
};

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const PADDING_LEFT = (WINDOW_WIDTH - CARD_WIDTH) / 2;

const Card: FC<TProps> = ({image, index, scrollOffset}) => {
  const rStyle = useAnimatedStyle(() => {
    const activeIndex = scrollOffset.value / CARD_WIDTH;

    const translateX = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [60, 30, 0, -CARD_WIDTH - PADDING_LEFT],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [1 - index * 0.05, 1 - index * 0.02, 1, 1],
      Extrapolation.CLAMP,
    );

    return {
      left: PADDING_LEFT,
      zIndex: -index,
      transform: [{translateX: translateX + scrollOffset.value}, {scale}],
    };
  });

  return (
    <Animated.View style={[styles.component, rStyle]}>
      <Image source={image} resizeMode="cover" style={styles.image} />
    </Animated.View>
  );
};

export default Card;
