import {Text, useWindowDimensions} from 'react-native';
import {FC} from 'react';
import {PADDING_HORIZONTAL, styles} from './styles';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import PressableScale from '@navigations/roots/app/screens/split-button/components/button/components/pressable-scale';

const GAP = 8;

interface IActionParams {
  onPress: () => void;
  label: string;
  backgroundColor: string;
}

interface IProps {
  isSplit: boolean;
  mainAction: IActionParams;
  leftAction: IActionParams;
  rightAction: IActionParams;
}

const Button: FC<IProps> = ({mainAction, leftAction, rightAction, isSplit}) => {
  const {width: windowWidth} = useWindowDimensions();

  const splittedButtonWidth =
    (windowWidth - (isSplit ? GAP : 0) - PADDING_HORIZONTAL * 2) / 2;

  const rStyleLeftButton = useAnimatedStyle(() => {
    const width = withTiming(isSplit ? splittedButtonWidth : 0);
    const opacity = withTiming(isSplit ? 1 : 0);

    return {
      width,
      backgroundColor: leftAction.backgroundColor,
      opacity,
    };
  }, [isSplit]);

  const rStyleMainButton = useAnimatedStyle(() => {
    const width = withTiming(
      isSplit ? splittedButtonWidth : splittedButtonWidth * 2,
    );

    return {
      width,
      backgroundColor: withTiming(
        isSplit ? rightAction.backgroundColor : mainAction.backgroundColor,
      ),
    };
  }, [isSplit]);

  const rStyleContainer = useAnimatedStyle(() => {
    return {
      gap: withTiming(isSplit ? GAP : 0),
    };
  }, [isSplit]);

  return (
    <Animated.View style={[styles.container, rStyleContainer]}>
      <PressableScale
        style={[styles.button, rStyleLeftButton]}
        onPress={leftAction.onPress}>
        <Text style={styles.text} numberOfLines={1}>
          {leftAction.label}
        </Text>
      </PressableScale>
      <PressableScale
        style={[styles.button, rStyleMainButton]}
        onPress={mainAction.onPress}>
        <Text style={styles.text}>{mainAction.label}</Text>
      </PressableScale>
    </Animated.View>
  );
};

export default Button;
