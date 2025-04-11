import {Pressable, Text, View} from 'react-native';
import {FC, useState} from 'react';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';
import {styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import Plus from '../../components/plus';

interface IItem {
  id: number;
}

const listItems: IItem[] = new Array(1).fill(0).map((_, i) => ({id: i}));

const MagicLayoutAnimation: FC = () => {
  const [data, setData] = useState(listItems);

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
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContainer}>
        {data.map(({id}) => {
          return (
            <Animated.View
              layout={LinearTransition.easing(Easing.ease).delay(500)}
              key={id}
              style={styles.item}
              entering={FadeIn}
              exiting={FadeOut}>
              <Pressable
                onPress={() => onRemove(id)}
                style={{width: '100%', height: '100%'}}>
                <Text>{id}</Text>
              </Pressable>
            </Animated.View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MagicLayoutAnimation;
