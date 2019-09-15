import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import socketIOClient from 'socket.io-client';

import layoutConstants from '../constants/Layout'
const { statusBarHeight, calcWidth, calcHeight } = layoutConstants

import colors from '../constants/Colors'
const { white, black, supportGrey, blue } = colors

import { Divider } from '../assets/images'

export default class SessionStatistics extends Component {
    getSessionFrequency() {
        try {
            return fetch('http://35.203.112.83:5000/vape/weekly/session-frequency')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(response)
                console.log(responseJson)
                // this.setState({ sessionFrequency: responseJson })
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (e) {
            console.log(e)
        }
    }

    getAvgDuration = () => {
        try {
            return fetch('http://35.203.112.83:5000/vape/weekly/avg-duration')
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({ averageDuration: `${parseInt(responseJson)} min` })
              return responseJson;
            })
            .catch((error) => {
              console.error(error);
          });
        } catch (e) {
            console.log(e)
        }
        
    }

    componentDidMount() {
        // comment these calls if the servers are not running
        this.getSessionFrequency()
        this.getAvgDuration()
        
        const socket = socketIOClient('http://35.203.112.83:5000')
        socket.on('ping', () => {
            console.log('ping')
        });
        socket.connect(); 
        socket.on('error', (error) => {
            console.log(error)
        });
        socket.on('event', function(data){
            console.log('connected to socket server'); 
        });
        socket.on("connect", () => {
            console.log('connected to socket server'); 
        })
        socket.on("no anomaly", (res) => { 
            console.log(res)
            console.log('connected to socket server'); 
        })
        socket.on("new anomaly", (res) => { 
            console.log(res)
            console.log('connected to socket server'); 
        })
    }

    constructor() {
        super()
        this.state = {
            sessionFrequency: 'Fetching...',
            averageDuration: 'Fetching...',
        }
    }

    render() {
        const { sessionContainer, title, value } = styles
        const { sessionFrequency, averageDuration } = this.state

        return (
            <>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        paddingLeft: calcWidth(46),
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
                    <View style={{
                        width: calcWidth(159),
                    }}>
                        <Text style={title}>{`SESSION\nFREQUENCY`}</Text>
                        <Text style={value}>{sessionFrequency}</Text>
                    </View>
                    <Image source={Divider} style={{
                        height: calcHeight(116),
                        width: calcWidth(2),
                        alignSelf: 'center'
                    }}></Image>
                    <View style={{
                        width: calcWidth(159),
                    }}>
                        <Text style={title}>{`DURATION PER\nSESSION`}</Text>
                        <Text style={value}>{averageDuration}</Text>
                    </View>
                </View>
            </>
        )
    }
}

const styles = {
    sessionContainer: {
        flexDirection: 'row',
        height: calcHeight(146),
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
    },
    title: {
        marginTop: calcHeight(26),
        fontFamily: 'sf-bold',
        fontSize: 12,
        color: white,
        letterSpacing: 2.5,
        textAlign: 'center'
    },
    value: {
        marginTop: calcHeight(19),
        fontFamily: 'sf-bold',
        fontSize: 20,
        color: white,
        letterSpacing: 2.5,
        textAlign: 'center'
    }
}