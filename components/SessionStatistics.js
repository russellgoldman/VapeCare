import React, { useState } from 'react'
import { View, Text } from 'react-native'

import Swiper from 'react-native-swiper';

import layoutConstants from '../constants/Layout'
const { statusBarHeight, calcWidth, calcHeight } = layoutConstants

import colors from '../constants/Colors'
const { white, black, supportGrey } = colors

export default SessionStatistics = () => {
    const { swiperContainer, swipeContent } = styles

    const [dayNum, setDayNum] = useState(1)

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    paddingLeft: calcWidth(48),
                    fontFamily: 'sf-bold',
                    fontSize: 15,
                    color: black,
                    letterSpacing: 2.5
                }}>WEEKLY STATISTICS</Text>
                <Text style={{
                    paddingLeft: calcWidth(39),
                    fontFamily: 'sf-bold',
                    fontSize: 15,
                    color: supportGrey,
                    letterSpacing: 2.5
                }}>DAY {dayNum}</Text>
            </View>
            <Swiper style={swiperContainer} showsButtons={true}>
                <View style={swipeContent}>

                </View>
            </Swiper>
        </View>
    )
}

const styles = {
    swiperContainer: {

    },
    swipeContent: {
        height: calcHeight(116),
    }
}