import { Dimensions, ImageProps } from 'react-native';

type TStory = {
  image: ImageProps['source'];
};

const {width} = Dimensions.get('window');

export const stories: TStory[] = [
  {
    image: require('../assets/image_01.png'),
  },
  {
    image: require('../assets/image_02.jpg'),
  },
  {
    image: require('../assets/image_03.jpg'),
  },
  {
    image: require('../assets/image_04.jpg'),
  },
  {
    image: require('../assets/image_02.jpg'),
  },
  {
    image: require('../assets/image_03.jpg'),
  },
  {
    image: require('../assets/image_04.jpg'),
  },
];

export const BACKGROUND_COLOR = '#2D3045';

export const CARD_WIDTH = width * 0.8;
