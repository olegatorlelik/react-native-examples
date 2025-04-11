import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {FC, useState} from 'react';
import {styles, ITEM_WIDTH, PADDING_HORIZONTAL} from './styles';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';

const options = ['light', 'dark', 'auto'];

const SegmentedControl: FC = () => {
  const [activeOption, setActiveOption] = useState(options[0]);

  const handleChangeActiveOption = (currentOption: string) => {
    setActiveOption(currentOption);
  };

  const rStyles = useAnimatedStyle(() => {
    return {
      left: withSpring(
        ITEM_WIDTH * options.indexOf(activeOption) + PADDING_HORIZONTAL / 2,
      ),
    };
  }, [activeOption]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.tabs}>
          <Animated.View style={[styles.activeBox, rStyles]} />
          {options.map(option => (
            <Pressable
              key={option}
              style={styles.item}
              onPress={() => handleChangeActiveOption(option)}>
              <Text style={styles.text}>{option}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SegmentedControl;
