import React from 'react';
import {
  ImageBackground,
  Text,
  View,
} from 'react-native';

const moment = require("moment")
import layoutConstants from '../constants/Layout'
import { Background } from '../assets/images'
import colors from '../constants/Colors'
const { white, black, supportGrey } = colors
const { statusBarHeight, window, mockup } = layoutConstants
const { windowHeight, windowWidth } = window
const { mockupHeight, mockupWidth } = mockup
const date = moment()

export default HomeScreen = () => {
  const {
    imgBackground,
    introTextContainer
  } = styles
  console.log(layoutConstants)

  return (
    <ImageBackground source={Background} style={imgBackground}>
      <View style={introTextContainer}>
        <Text style={{
          fontSize: 32,
          fontFamily: 'sf-bold',
          color: white
        }}>Good morning John</Text>
        <Text style={{
          paddingTop: windowHeight * (12 / mockupHeight),
          fontSize: 15,
          fontFamily: 'sf-semibold',
          color: white
        }}>{date.format("dddd MMMM Do").toUpperCase()}</Text>
      </View>
      
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
  },
  introTextContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: windowHeight * (30 / mockupHeight)
  }
}