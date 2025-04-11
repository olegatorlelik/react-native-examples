import {Image, ImageProps} from 'react-native';
import {FC} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {LIST_ITEM_WIDTH, styles} from './styles';

interface IProps {
  item: ImageProps['source'];
  contentOffset: SharedValue<number>;
  index: number;
}

const Item: FC<IProps> = ({item, contentOffset, index}) => {
  const rStyle = useAnimatedStyle(() => {
    const inputRage = [
      (index - 2) * LIST_ITEM_WIDTH,
      (index - 1) * LIST_ITEM_WIDTH,
      index * LIST_ITEM_WIDTH,
      (index + 1) * LIST_ITEM_WIDTH,
      (index + 2) * LIST_ITEM_WIDTH,
      (index + 3) * LIST_ITEM_WIDTH,
    ];
    const translateYOutputRange = [
      0,
      -LIST_ITEM_WIDTH / 3,
      -LIST_ITEM_WIDTH / 2,
      -LIST_ITEM_WIDTH / 3,
      0,
      LIST_ITEM_WIDTH / 4,
    ];
    const opacityOutputRange = [0.4, 0.8, 1, 0.8, 0.4, 0.1];
    const scaleOutputRange = [0.8, 0.9, 1, 0.9, 0.8, 0.7];

    const translateY = interpolate(
      contentOffset.value,
      inputRage,
      translateYOutputRange,
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      contentOffset.value,
      inputRage,
      opacityOutputRange,
      Extrapolation.CLAMP,
    );
    const scale = interpolate(
      contentOffset.value,
      inputRage,
      scaleOutputRange,
      Extrapolation.CLAMP,
    );

    return {
      transform: [
        {translateY},
        {translateX: LIST_ITEM_WIDTH * 2 - LIST_ITEM_WIDTH / 2},
        {scale},
      ],
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.item, rStyle]}>
      <Image source={item} style={styles.image} resizeMode="cover" />
    </Animated.View>
  );
};

export default Item;
