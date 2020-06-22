import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import {VictoryChart, VictoryLine, VictoryZoomContainer, VictoryBrushContainer, VictoryAxis} from "victory-native";



class Timer extends Component {
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
    _updateData: any;
    data = [];
    dataUp = [];
    dataRun = 300
    dataDown = [];
    toggleStopwatch() {
        this._updateData = setInterval(() => {
            this.dataRun = Math.random() * (600 - 400) + 400;
            let result = {
                x: this.currentTime,
                y: this.dataRun
            }
            let resultUp = {
                x: this.currentTime,
                y: 600
            }

            let resultDown = {
                x: this.currentTime,
                y: 400
            }
            this.data.push(result)
            this.dataUp.push(resultUp)
            this.dataDown.push(resultDown)
            this.forceUpdate()
        },1000)
        this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    }

    resetStopwatch() {
        this.data = []
        this.dataUp = []
        this.dataDown = []
        this.currentTime = ''
        clearInterval(this._updateData);
        this.setState({stopwatchStart: false, stopwatchReset: true});
    }



    handleZoom(domain) {
        this.setState({selectedDomain: domain});
    }

    handleBrush(domain) {
        this.setState({zoomDomain: domain});
    }





    formatCurrentTime(time) {
        if (time !== undefined){
            let arrayString = time.split(':');
            let second = parseInt(arrayString[3])
            return second - 5
        }else{
            return 0
        }
    }

    render() {
        return (
            <View>
                <VictoryChart
                    width={550}
                    height={300}
                    scale={{x: "time"}}
                    containerComponent={
                        <VictoryZoomContainer responsive={false}
                                              zoomDimension="x"
                                              zoomDomain={this.state.zoomDomain}
                                              onZoomDomainChange={this.handleZoom.bind(this)}
                        />
                    }
                >
                    <VictoryLine
                        style={{
                            data: {stroke: "tomato"}
                        }}
                        data={[
                            {x: new Date(1982, 1, 1), y: 125},
                            {x: new Date(1987, 1, 1), y: 257},
                            {x: new Date(1993, 1, 1), y: 345},
                            {x: new Date(1997, 1, 1), y: 515},
                            {x: new Date(2001, 1, 1), y: 132},
                            {x: new Date(2005, 1, 1), y: 305},
                            {x: new Date(2011, 1, 1), y: 270},
                            {x: new Date(2015, 1, 1), y: 470}
                        ]}
                    />

                </VictoryChart>

                <VictoryChart
                    width={550}
                    height={90}
                    scale={{x: "time"}}
                    padding={{top: 0, left: 50, right: 50, bottom: 30}}
                    containerComponent={
                        <VictoryBrushContainer responsive={false}
                                               brushDimension="x"
                                               brushDomain={this.state.selectedDomain}
                                               onBrushDomainChange={this.handleBrush.bind(this)}
                        />
                    }
                >
                    <VictoryAxis
                        tickValues={[
                            new Date(1985, 1, 1),
                            new Date(1990, 1, 1),
                            new Date(1995, 1, 1),
                            new Date(2000, 1, 1),
                            new Date(2005, 1, 1),
                            new Date(2010, 1, 1),
                            new Date(2015, 1, 1)
                        ]}
                        tickFormat={(x) => new Date(x).getFullYear()}
                    />
                    <VictoryLine
                        style={{
                            data: {stroke: "tomato"}
                        }}
                        data={[
                            {x: new Date(1982, 1, 1), y: 125},
                            {x: new Date(1987, 1, 1), y: 257},
                            {x: new Date(1993, 1, 1), y: 345},
                            {x: new Date(1997, 1, 1), y: 515},
                            {x: new Date(2001, 1, 1), y: 132},
                            {x: new Date(2005, 1, 1), y: 305},
                            {x: new Date(2011, 1, 1), y: 270},
                            {x: new Date(2015, 1, 1), y: 470}
                        ]}
                    />
                </VictoryChart>
                <VictoryChart
                    domain={{x: ['00:00:00', '00:01:00'],y: [0, 1100]}}
                    containerComponent={<VictoryZoomContainer zoomDimension="x" zoomDomain={{x: [0,5],y: [0, 1100]}}/>}
                >
                    <VictoryLine
                        style={{
                            data: { stroke: "#171313" }
                        }}
                        interpolation="natural"
                        data={this.data}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" }
                        }}
                        interpolation="natural"
                        data={this.dataUp}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" }
                        }}
                        interpolation="natural"
                        data={this.dataDown}
                    />
                </VictoryChart>
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

export default Timer
