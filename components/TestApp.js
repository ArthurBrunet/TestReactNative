import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';



class TestApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stopwatchStart: false,
            stopwatchReset: false,
        };
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }
    currentTime: any;
    toggleStopwatch() {
        this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    }

    resetStopwatch() {
        this.setState({stopwatchStart: false, stopwatchReset: true});
    }

    render() {
        let button
        if (this.currentTime <= "00:00:10"){
            button = (<Text>Je suis un bouton nul</Text>)
        }
        return (
            <View>
                <Stopwatch laps start={this.state.stopwatchStart}
                           reset={this.state.stopwatchReset}
                           options={options}
                           getTime={(time) => this.currentTime = time} />
                <TouchableHighlight onPress={this.toggleStopwatch}>
                    <Text style={{fontSize: 30}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.resetStopwatch}>
                    <Text style={{fontSize: 30}}>Reset</Text>
                </TouchableHighlight>
                {button}
            </View>
        );
    }
}

const options = {
    container: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 5,
        width: 220,
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    }
};

export default TestApp
