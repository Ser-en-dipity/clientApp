import React, { Component } from 'react';
import * as eCharts from "echarts";
import "./style.css";
export class BarChart extends Component {
    static displayName = BarChart.name;
    eChartsRef: any = React.createRef();
    constructor(props) {
        super(props);
       
        this.state = { currentCount: 0 };
    }

    componentDidMount() {
        console.log(this.eChartsRef.current);
        const myChart = eCharts.init(this.eChartsRef.current);

        let option = {
            title: {
                text: '',
                subtext: '',
                left: 'center'
            },
            
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '良' },
                        { value: 735, name: '不良' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
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
            <div>
                <div ref={this.eChartsRef} className="Barchart"></div>
            </div>
        );
    }

    getJsondata() {
        // 创建一个空的二维数组
        var matrix = [];

        // 定义二维数组的行数和列数
        var rows = 2;
        var cols = 200;

        // 循环生成随机数并添加到二维数组中
        for (var i = 0; i < rows; i++) {
            // 创建一个空的一维数组，作为二维数组的一行
            var row = [];
            for (var j = 0; j < cols; j++) {
                // 生成随机数并添加到一维数组中
                var randomNum = Math.floor(Math.random() * 900) + 100; // 生成 0 到 99 的随机整数
                row.push(randomNum);
            }
            // 将一维数组添加到二维数组中
            matrix.push(row);
        }
        return matrix;
    }
}