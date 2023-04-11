import React, { Component } from 'react';
import * as eCharts from "echarts";
import "./style.css";
export class AxisChart extends Component {
    static displayName = AxisChart.name;
    eChartsRef: any = React.createRef();
    constructor(props) {
        super(props);

        this.state = {
            currentCount: 0,
            data:[]
        };
    }
    componentDidMount() {
        console.log(this.eChartsRef.current);
        this.state.data = this.props.data;
        console.log(this.state.data)
        const myChart = eCharts.init(this.eChartsRef.current);
        const data = this.getJsondata();
        console.log(data);
        const dateList = data[0];
        const valueList = data[1];
        let option = {
            title: {
                text: '',
            },
            grid: {
                left: '5%',
                right: '15%',
                bottom: '10%'
            },
            xAxis: {
                data: dateList
            },
            yAxis: {},
            dataZoom: [
                {
                    startValue: data[1][0]
                },
                {
                    type: 'inside'
                }
            ],
            visualMap: {
            },
            series: {
                name: '',
                type: 'line',
                data: valueList,
                markLine: {
                }
            }
        };

        myChart.setOption(option);
        window.addEventListener("resize", () => {
            if (myChart) {
                myChart.resize()
            }
        })
    }
    render() {
        return (
            <div ref={this.eChartsRef} className="chart"></div>
        );
    }

    getJsondata() {
        var matrix = [];
        var row1=[];
        var row2=[]
        for(var i=1;i<=10;i++){
            row1.push(i);
        }
        for(var i=2;i<=20;i+=2){
            row2.push(i);
        }
        matrix.push(row1);
        matrix.push(row2);
        return matrix;
    }
}