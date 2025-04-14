import {FC, useCallback, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import Chip from './components/chip';

const generateRandomString = (length: number): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return Array.from(
    {length},
    () => chars[Math.floor(Math.random() * chars.length)],
  ).join('');
};
const listItems = new Array(20)
  .fill(0)
  .map((_, i) => ({id: i, word: generateRandomString(10)}));

const CheckboxInteraction: FC = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleAdd = useCallback(
    (id: number) => setSelected(prev => [...prev, id]),
    [],
  );
  const handleRemove = useCallback(
    (id: number) =>
      setSelected(prev => prev.filter(selectedId => selectedId !== id)),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {listItems.map(({id, word}) => (
          <Chip
            key={id}
            id={id}
            word={word}
            onRemove={handleRemove}
            onAdd={handleAdd}
            isSelected={selected.includes(id)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default CheckboxInteraction;
