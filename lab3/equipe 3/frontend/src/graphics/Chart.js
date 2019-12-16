import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
        location: 'City'
    }

    render() {
//        console.log(this.state.chartData)
        return (
            <div className="chart">
                <Line
                    data={this.props.chartData}
                    width={100}
                    height={40}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Sensor de Ph',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;