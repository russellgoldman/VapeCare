import React from 'react';
import {
  ImageBackground,
  Text,
  View,
} from 'react-native';

import layoutConstants from '../constants/Layout'
import { Background } from '../assets/images'
const { statusBarHeight } = layoutConstants

export default HomeScreen = () => {
  const { imgBackground } = styles
  console.log(layoutConstants)

  return (
    <ImageBackground source={Background} style={imgBackground}>
      <Text>Hello</Text>
    </ImageBackground>
  )
}

const styles = {
  imgBackground: {
    paddingTop: statusBarHeight,
    width: '100%',
    height: '100%',
    position: 'relative', 
    top: 0,
    left: 0
  }
}