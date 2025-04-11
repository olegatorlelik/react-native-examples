import {Pressable, Text, ViewToken} from 'react-native';
import {FC} from 'react';
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';

export interface IItem {
  id: number;
}

interface IProps {
  viewableItems: SharedValue<ViewToken<IItem>[]>;
  onRemove: (id: IItem['id']) => void;
  item: IItem;
}

const Item: FC<IProps> = ({item, viewableItems, onRemove}) => {
  const translateX = useSharedValue(0);

  const handleRemove = () => {
    translateX.value = withTiming(-500, {duration: 500}, isFinished => {
      if (isFinished) {
        runOnJS(onRemove)(item.id);
      }
    });
  };

  const rStyles = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(({isViewable}) => isViewable)
        .find(({item: vItem}) => vItem.id === item.id),
    );

    return {
      opacity: isVisible ? withTiming(1) : 0,
      transform: [{translateX: translateX.value}],
    };
  }, []);

  return (
    <Animated.View style={[styles.item, rStyles]}>
      <Pressable onPress={handleRemove}>
        <Text>{item.id}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default Item;
