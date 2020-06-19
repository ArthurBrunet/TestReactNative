import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';

class Chart extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <LineChart
                    data={{
                        labels: [20, 20, 20, 20, 20, 20],
                        datasets: [
                            {
                                data: [
                                    250
                                ]
                            }
                        ]
                    }}
                    width={ Dimensions.get("window").width } // from react-native
                    height={220}
                    yAxisLabel="W"
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#000000",
                        backgroundGradientFrom: "#000000",
                        backgroundGradientTo: "#000000",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        );
    }
}

export default Chart
