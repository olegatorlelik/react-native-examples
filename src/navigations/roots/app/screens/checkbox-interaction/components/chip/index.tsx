import {FC, memo} from 'react';
import {Pressable} from 'react-native';
import CheckIcon from '@navigations/roots/app/components/check';
import {
  styles,
  LABEL_ACTIVE_COLOR,
  LABEL_COLOR,
  LIST_ITEM_COLOR,
  LIST_ITEM_BORDER_COLOR,
} from './styles';
import Animated, {
  FadeInRight,
  FadeOutLeft,
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type TChip = {
  id: number;
  word: string;
  onRemove: (id: number) => void;
  onAdd: (id: number) => void;
  isSelected: boolean;
};

const Chip: FC<TChip> = ({word, id, isSelected, onRemove, onAdd}) => {
  const handleToggle = () => {
    if (isSelected) {
      onRemove(id);

      return;
    }

    onAdd(id);
  };

  const rStyleComponent = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(isSelected ? LIST_ITEM_COLOR : 'transparent'),
    };
  }, [isSelected]);

  const rStyleText = useAnimatedStyle(() => {
    return {
      color: withTiming(isSelected ? LABEL_ACTIVE_COLOR : LABEL_COLOR),
    };
  }, [isSelected]);

  const rStyleCheckboxContainer = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isSelected ? LIST_ITEM_BORDER_COLOR : 'transparent',
      ),
    };
  }, [isSelected]);

  return (
    <Animated.View
      style={[styles.component, rStyleComponent]}
      layout={LinearTransition}>
      <Pressable
        style={[styles.pressable, {gap: isSelected ? 8 : 0}]}
        onPress={handleToggle}>
        <Animated.Text style={[styles.text, rStyleText]}>{word}</Animated.Text>
        {isSelected && (
          <Animated.View
            entering={FadeInRight}
            exiting={FadeOutLeft}
            style={[styles.checkBoxContainer, rStyleCheckboxContainer]}
            layout={LinearTransition}>
            <CheckIcon />
          </Animated.View>
        )}
      </Pressable>
    </Animated.View>
  );
};

export default memo(Chip);
