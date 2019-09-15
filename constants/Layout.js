import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const statusBarHeight = getStatusBarHeight()

export default {
  window: {
    widthHeight: width,
    windowHeight: height,
  },
  mockup: {
    mockupWidth: 375,
    mockupHeight: 812
  },
  statusBarHeight: statusBarHeight,
  isSmallDevice: width < 375,
};
