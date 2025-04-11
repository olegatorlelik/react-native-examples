import {View} from 'react-native';
import {FC} from 'react';
import Animated, {withDecay} from 'react-native-reanimated';
import {styles} from './styles';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Ripple from './components/ripple';

const RippleEffect: FC = () => {
  return (
    <View style={styles.container}>
      <Ripple style={styles.ripple} />
    </View>
  );
};

export default RippleEffect;
