import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import layoutConstants from '../constants/Layout'
const { statusBarHeight, calcWidth, calcHeight } = layoutConstants

import colors from '../constants/Colors'
const { white, black, supportGrey, blue } = colors

export default class SessionStatistics extends Component {
    async getMoviesFromApiAsync() {
        return fetch('http://35.203.112.83:5000/vape/weekly/avg-duration')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            return responseJson
        })
        .catch((error) => {
        console.error(error);
        });
    }

    componentWillMount() {
        this.getMoviesFromApiAsync()
    }

    constructor() {
        super()
        state = {
            weeklySessions: 0
        }
    }

    render() {
        const { sessionContainer } = styles
        return (
            <>
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
                    }}>DAY 1</Text>
                </View>
                <View style={sessionContainer}>
                    <View>
                        <Text>Average Sessions</Text>
                        <Text></Text>
                    </View>
                    <View></View>
                </View>
            </>
        )
    }
}

const styles = {
    sessionContainer: {
        flexDirection: 'row',
        height: calcHeight(116),
        width: calcWidth(319),
        marginTop: calcHeight(14),
        marginLeft: calcWidth(28),
        backgroundColor: blue,
        borderRadius: 20,
        shadowColor: black,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {
            width: 4,
            height: 4
        },
    }
}