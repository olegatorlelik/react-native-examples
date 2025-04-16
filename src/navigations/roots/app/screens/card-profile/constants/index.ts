import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export const CARD_WIDTH = width * 0.9;
export const CARD_HEIGHT = 256;
export const CARD_PROFILE_HEIGHT = CARD_HEIGHT - 24;
export const CARD_PROFILE_WIDTH = CARD_WIDTH - 24;
