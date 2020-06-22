import React, { Component } from 'react';
import { VictoryLine, VictoryChart,VictoryZoomContainer} from 'victory-native';


class Chart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <VictoryChart
                domain={{y: [0, 10]}}
                containerComponent={<VictoryZoomContainer zoomDomain={{x: [0, 10], y: [0, 10]}}/>}
            >
                <VictoryLine
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                />
            </VictoryChart>
        );
    }
}

export default Chart
