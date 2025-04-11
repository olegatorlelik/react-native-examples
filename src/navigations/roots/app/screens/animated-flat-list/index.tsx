import {Pressable, View, ViewToken} from 'react-native';
import {FC, useState} from 'react';
import Animated, {
  useSharedValue,
  LinearTransition,
} from 'react-native-reanimated';
import {styles} from './styles';
import Plus from '../../components/plus';
import Item, {IItem} from './item';

const listItems: IItem[] = new Array(50).fill(0).map((_, i) => ({id: i}));

const AnimatedFlatList: FC = () => {
  const [data, setData] = useState(listItems);

  const viewableItems = useSharedValue<ViewToken<IItem>[]>([]);

  const onAdd = () => {
    setData(prevState => {
      const lastItem = prevState[prevState.length - 1];

      return [...prevState, lastItem ? {id: lastItem.id + 1} : {id: 0}];
    });
  };

  const onRemove = (removeId: number) => {
    setData(prevState => prevState.filter(({id}) => id !== removeId));
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onAdd}>
        <Plus />
      </Pressable>
      <Animated.FlatList
        itemLayoutAnimation={LinearTransition.delay(500)}
        onViewableItemsChanged={({viewableItems: cViewableItems}) =>
          (viewableItems.value = cViewableItems)
        }
        contentContainerStyle={styles.listContainer}
        keyExtractor={({id}) => `${id}`}
        data={data}
        renderItem={({item}) => {
          return (
            <Item
              key={item.id}
              viewableItems={viewableItems}
              onRemove={onRemove}
              item={item}
            />
          );
        }}
      />
    </View>
  );
};

export default AnimatedFlatList;
