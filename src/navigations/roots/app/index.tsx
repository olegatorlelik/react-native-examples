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
import ShakeText from './screens/shake-text';
import SplitButton from './screens/split-button';
import StackedCards from './screens/stacked-cards';
import CheckboxInteraction from './screens/checkbox-interaction';
import StoryList from './screens/story-list';
import PageDots from './screens/page-dots';
import BarChart from './screens/bar-chart';

const Stack = createNativeStackNavigator();

const options = {header: () => null};
const {
  interpolateColor,
  interpolateScrollView,
  scrollViewFromScratch,
  colorPicker,
  segmentedControl,
  magicLayoutAnimation,
  animatedFlatList,
  circularCarouselAnimation,
  circularProgress,
  clock,
  slidingCounter,
  pinchGestureHandlerScreen,
  panGestureHandler,
  perspectiveMenu,
  doubleTap,
  introduce,
  rippleEffect,
  swipeToDelete,
  dropdown,
  shakeText,
  splitButton,
  stackedCards,
  checkboxInteraction,
  storyList,
  pageDots,
  barChart,
} = screenNames;

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={barChart}>
      <Stack.Screen name={barChart} component={BarChart} options={options} />
      <Stack.Screen name={pageDots} component={PageDots} options={options} />
      <Stack.Screen name={storyList} component={StoryList} options={options} />
      <Stack.Screen
        name={checkboxInteraction}
        component={CheckboxInteraction}
        options={options}
      />
      <Stack.Screen
        name={stackedCards}
        component={StackedCards}
        options={options}
      />
      <Stack.Screen
        name={splitButton}
        component={SplitButton}
        options={options}
      />
      <Stack.Screen name={shakeText} component={ShakeText} options={options} />
      <Stack.Screen
        name={segmentedControl}
        component={SegmentedControl}
        options={options}
      />
      <Stack.Screen
        name={circularCarouselAnimation}
        component={CircularCarouselAnimation}
        options={options}
      />
      <Stack.Screen name={dropdown} component={Dropdown} options={options} />
      <Stack.Screen
        name={animatedFlatList}
        component={AnimatedFlatList}
        options={options}
      />
      <Stack.Screen
        name={magicLayoutAnimation}
        component={MagicLayoutAnimation}
        options={options}
      />
      <Stack.Screen name={clock} component={Clock} options={options} />
      <Stack.Screen
        name={slidingCounter}
        component={SlidingCounter}
        options={options}
      />
      <Stack.Screen
        name={perspectiveMenu}
        component={PerspectiveMenu}
        options={options}
      />
      <Stack.Screen
        name={rippleEffect}
        component={RippleEffect}
        options={options}
      />
      <Stack.Screen
        name={swipeToDelete}
        component={SwipeToDelete}
        options={options}
      />
      <Stack.Screen
        name={circularProgress}
        component={CircularProgress}
        options={options}
      />
      <Stack.Screen
        name={colorPicker}
        component={ColorPicker}
        options={options}
      />
      <Stack.Screen
        name={scrollViewFromScratch}
        component={ScrollViewFromScratch}
        options={options}
      />
      <Stack.Screen name={doubleTap} component={DoubleTap} options={options} />
      <Stack.Screen
        name={pinchGestureHandlerScreen}
        component={PinchGestureHandler}
        options={options}
      />
      <Stack.Screen name={introduce} component={Introduce} options={options} />
      <Stack.Screen
        name={panGestureHandler}
        component={PanGestureHandler}
        options={options}
      />
      <Stack.Screen
        name={interpolateScrollView}
        component={InterpolateScrollView}
        options={options}
      />
      <Stack.Screen
        name={interpolateColor}
        component={InterpolateColor}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
