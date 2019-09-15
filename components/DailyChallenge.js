import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import * as Progress from 'react-native-progress';
import socketIOClient from 'socket.io-client';

import layoutConstants from '../constants/Layout'
const { calcWidth, calcHeight } = layoutConstants

import colors from '../constants/Colors'
const { white, black, supportGrey, blue } = colors

import { NoVaping, HorizontalDivider } from '../assets/images'

export default class DailyChallenge extends Component {
    constructor() {
        super()
        this.state = {
            challengeStarted: false,
            minutes: 0
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        console.log(this.state.minutes)
        const { dailyChallengeContainer, title, value } = styles
        const { challengeStarted, minutes } = this.state

        return (
            <>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        paddingLeft: calcWidth(48),
                        fontFamily: 'sf-bold',
                        fontSize: 15,
                        color: black,
                        letterSpacing: 2.5
                    }}>DAILY CHALLENGE</Text>
                    <Text style={{
                        paddingLeft: calcWidth(20),
                        fontFamily: 'sf-bold',
                        fontSize: 12,
                        color: supportGrey,
                        letterSpacing: 2.5,
                        alignSelf: 'center'
                    }}>TAP TO BEGIN</Text>
                </View>
                <TouchableOpacity style={dailyChallengeContainer} onPress={() => {
                    this.setState({ challengeStarted: true })
                    this.interval = setInterval(() => this.setState((prevState) => {
                        return {
                            minutes: prevState.minutes += 1
                        };
                    }), 1000)
                }}>
                    <Image source={NoVaping} style={{
                        height: calcHeight(51),
                        width: calcWidth(51),
                        marginLeft: calcWidth(133.6),
                        marginTop: calcHeight(18.66)
                    }} />
                    <Text style={{
                        marginTop: calcWidth(20),
                        fontFamily: 'sf-bold',
                        fontSize: 20,
                        color: white,
                        letterSpacing: 2.5,
                        textAlign: 'center'
                    }}>Don't vape for 5 minutes</Text>
                    {challengeStarted && (
                        <>
                        <Progress.Bar
                            progress={minutes / (5 * 60)} 
                            width={calcWidth(212)}
                            height={calcHeight(11)}
                            color={'#fff'} style={{
                                marginTop: calcHeight(20),
                                marginLeft: calcWidth(63)
                            }}
                        />
                        </>
                    )}{!challengeStarted && (
                    <>
                        <Image source={HorizontalDivider} style={{
                            height: calcHeight(2),
                            width: calcWidth(218),
                            marginTop: calcHeight(26),
                            alignSelf: 'center'
                        }} />
                        <Text style={{
                            marginTop: calcWidth(25),
                            fontFamily: 'sf-bold',
                            fontSize: 12,
                            color: white,
                            letterSpacing: 2.5,
                            textAlign: 'center'
                        }}>{`5 CREDITS IF\nSUCCESSFUL`}</Text>
                    </>
                    )}
                </TouchableOpacity>
            </>
        )
    }
}

const styles = {
    dailyChallengeContainer: {
        height: calcHeight(224),
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