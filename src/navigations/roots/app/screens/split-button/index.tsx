import {SafeAreaView} from 'react-native';
import {FC, useState} from 'react';
import {styles} from './styles';
import {COLORS} from './constants';
import Button from './components/button';

const SplitButton: FC = () => {
  const [isSplit, setIsSplit] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        isSplit={isSplit}
        mainAction={{
          backgroundColor: COLORS.card,
          label: 'Stop',
          onPress: () => setIsSplit(true),
        }}
        leftAction={{
          backgroundColor: COLORS.card,
          label: 'Resume',
          onPress: () => setIsSplit(false),
        }}
        rightAction={{
          backgroundColor: COLORS.highlight,
          label: 'Finish',
          onPress: () => console.log('tap'),
        }}
      />
    </SafeAreaView>
  );
};

export default SplitButton;
