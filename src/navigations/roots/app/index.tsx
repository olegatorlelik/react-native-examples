import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './constants/screen-names';
import Introduce from './screens/introduce';
import PanGestureHandler from './screens/pan-gesture-handler';
import InterpolateScrollView from './screens/interpolate-scroll-view';
import InterpolateColor from './screens/interpilate-color';
import PinchGestureHandler from './screens/pinch-gesture-handler';
import DoubleTap from './screens/double-tap';
import ScrollViewFromScratch from './screens/scroll-view-from-scratch';
import ColorPicker from './screens/color-picker';
import CircularProgress from './screens/circular-progress';
import SwipeToDelete from './screens/swipe-to-delete';
import RippleEffect from './screens/ripple-effect';
import PerspectiveMenu from './screens/perspective-menu';
import SlidingCounter from './screens/sliding-counter';
import Clock from './screens/clock';
import MagicLayoutAnimation from './screens/magic-layout-animation';
import AnimatedFlatList from './screens/animated-flat-list';
import Dropdown from './screens/dropdown';
import CircularCarouselAnimation from './screens/circular-carousel-animation';
import SegmentedControl from './screens/segmented-control';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.segmentedControl}>
      <Stack.Screen
        name={screenNames.segmentedControl}
        component={SegmentedControl}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.circularCarouselAnimation}
        component={CircularCarouselAnimation}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.dropdown}
        component={Dropdown}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.animatedFlatList}
        component={AnimatedFlatList}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.magicLayoutAnimation}
        component={MagicLayoutAnimation}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.clock}
        component={Clock}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.slidingCounter}
        component={SlidingCounter}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.perspectiveMenu}
        component={PerspectiveMenu}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.rippleEffect}
        component={RippleEffect}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.swipeToDelete}
        component={SwipeToDelete}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.circularProgress}
        component={CircularProgress}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.colorPicker}
        component={ColorPicker}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.scrollViewFromScratch}
        component={ScrollViewFromScratch}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.doubleTap}
        component={DoubleTap}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.pinchGestureHandlerScreen}
        component={PinchGestureHandler}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.introduce}
        component={Introduce}
        options={{header: () => null}}
      />
      <Stack.Screen
        name={screenNames.panGestureHandler}
        component={PanGestureHandler}
      />
      <Stack.Screen
        name={screenNames.interpolateScrollView}
        component={InterpolateScrollView}
      />
      <Stack.Screen
        name={screenNames.interpolateColor}
        component={InterpolateColor}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
