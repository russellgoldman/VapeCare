import React from 'react';
import {
  ImageBackground,
  Text,
  View,
} from 'react-native';

import { Background } from '../assets/images'
import { SessionStatistics } from '../components';

import layoutConstants from '../constants/Layout'
const { statusBarHeight, calcWidth, calcHeight } = layoutConstants

import colors from '../constants/Colors'
const { white, black, supportGrey } = colors

const moment = require("moment")
const date = moment()

export default StatisticsScreen = () => {
  const {
    imgBackground,
    introTextContainer
  } = styles

  return (
    <ImageBackground source={Background} style={imgBackground}>
      <View style={introTextContainer}>
        <Text style={{
          fontSize: 32,
          fontFamily: 'sf-bold',
          color: white,
          letterSpacing: 1
        }}>Good morning John</Text>
        <Text style={{
          paddingTop: calcHeight(12),
          fontSize: 15,
          fontFamily: 'sf-semibold',
          color: white,
          letterSpacing: 1,
        }}>{date.format("dddd MMMM Do").toUpperCase()}</Text>
      </View>
      <View style={{ marginTop: calcHeight(118) }} />
      <SessionStatistics />
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
    paddingTop: calcHeight(30)
  }
}