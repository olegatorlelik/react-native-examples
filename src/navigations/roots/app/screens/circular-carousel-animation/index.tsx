import {ImageProps, View} from 'react-native';
import {FC, useEffect} from 'react';
import Animated, {
  LinearTransition,
  useSharedValue,
} from 'react-native-reanimated';
import {styles} from './styles';
import Item from './item';
import {LIST_ITEM_WIDTH} from './item/styles';

const data: ImageProps['source'] = [
  require('./assets/00.jpg'),
  require('./assets/01.jpg'),
  require('./assets/02.jpg'),
  require('./assets/03.jpg'),
  require('./assets/04.jpg'),
  require('./assets/05.jpg'),
  require('./assets/06.jpg'),
  require('./assets/07.jpg'),
  require('./assets/08.jpg'),
  require('./assets/09.jpg'),
];

const CircularCarouselAnimation: FC = () => {
  const contentOffset = useSharedValue(0);

  useEffect(() => console.log('123'));

  return (
    <View style={styles.container}>
      <View>
        <Animated.FlatList
          snapToInterval={LIST_ITEM_WIDTH}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          scrollEventThrottle={16}
          onScroll={e => (contentOffset.value = e.nativeEvent.contentOffset.x)}
          horizontal
          itemLayoutAnimation={LinearTransition.delay(500)}
          contentContainerStyle={[
            styles.listContainer,
            {
              paddingRight: LIST_ITEM_WIDTH * 3,
            },
          ]}
          keyExtractor={(_, i) => `${i}`}
          data={data}
          renderItem={({item, index}) => (
            <Item
              key={index}
              index={index}
              item={item}
              contentOffset={contentOffset}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CircularCarouselAnimation;
