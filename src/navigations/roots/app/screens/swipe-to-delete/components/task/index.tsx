import {Dimensions, Text} from 'react-native';
import {FC} from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {LIST_ITEM_HEIGHT, styles} from './styles';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import TrashIcon from '@navigations/roots/app/components/trash';

interface IProps {
  title: string;
  id: number;
  onDismiss: (id: number) => void;
}

const {width} = Dimensions.get('window');

const TRANSLATE_X_THRESHOLD = -(width * 0.3);

const Task: FC<IProps> = ({title, id, onDismiss}) => {
  const translateX = useSharedValue(0);
  const tempTranslateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const iconOpacity = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      tempTranslateX.value = translateX.value;
    })
    .onUpdate(e => {
      translateX.value = tempTranslateX.value + e.translationX;
      iconOpacity.value = withTiming(
        translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
      );
    })
    .onEnd(() => {
      if (translateX.value < TRANSLATE_X_THRESHOLD) {
        translateX.value = withTiming(-width);
        itemHeight.value = withTiming(0);
        iconOpacity.value = withTiming(0, undefined, finished => {
          if (!finished) {
            return;
          }

          runOnJS(onDismiss)(id);
        });
      } else {
        translateX.value = withSpring(0);
      }
    })
    .activeOffsetX([-10, 10])
    .failOffsetY([-10, 10])
    .shouldCancelWhenOutside(true);

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const rIconContainer = useAnimatedStyle(() => {
    return {
      opacity: iconOpacity.value,
    };
  });

  const rTaskStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
    };
  });

  return (
    <Animated.View style={[styles.task, rTaskStyle]}>
      <Animated.View style={[styles.iconContainer, rIconContainer]}>
        <TrashIcon />
      </Animated.View>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.content, rTaskContainerStyle]}>
          <Text style={styles.title}>{title}</Text>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
};

export default Task;
