import React, { Component } from 'react';
import { BarChart } from './Charts/BarChart';
import { AxisChart } from './Charts/AxisChart';
import "./style/style.css";
export class Chart extends Component {
    static displayName = Chart.name;
    eChartsRef: any = React.createRef();
    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
    }

    componentDidMount() {

    }
    render() {
        const axisChart = [];
        const axiostabledata = [[2, 5, 5, 8, 9, 14], [2, 15, 38, 55, 79, 314], [2, 22, 33, 55, 77, 88]];

        const listAxisChartsData = [];
        if (axiostabledata.length > 0) {
            let good = 0;
            let bad = 0;
            for (var i = 0; i < axiostabledata.length; i++) {
                let objData = {};
                objData.id = i+1;
                objData.chartData = axiostabledata[i];
                objData.tableData = [];
                objData.quantities = {};
               let objTableData = {
                    id: i,
                   name: "平均值",
                   value:this.getAverageNum(axiostabledata[i]),
                }
                objData.tableData.push(objTableData);
                objTableData = {
                    id: i+1,
                    name: "中位",
                    value: this.medianofArr(axiostabledata[i]),
                }
                objData.tableData.push(objTableData);
                objTableData = {
                    id: i+2,
                    name: "标准差",
                    value: this.standardDeviation(axiostabledata[i]),
                }
                objData.tableData.push(objTableData);
                objData.quantities.good = this.GetGoodProCount(axiostabledata[i]);
                objData.quantities.bad = axiostabledata[i].length - objData.quantities.good;
                good += objData.quantities.good;
                bad += objData.quantities.bad;
                listAxisChartsData.push(objData);
                
            }
            listAxisChartsData.good = good;
            listAxisChartsData.bad = bad;
            console.log(listAxisChartsData);
        }
     
        const pieChartElements = [];
        pieChartElements.push(<div className="childTwo divBorder">
            <div className="block ">
                <BarChart />
                <table>
                    <tbody>
                        <tr>
                            <td>良</td>
                            <td>{listAxisChartsData.good}</td>
                        </tr>
                        <tr>
                            <td>不良</td>
                            <td>{listAxisChartsData.bad}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
        return (
            <div >
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>name</th>
                            <th>name</th>
                            <th>name</th>
                            <th>name</th>
                            <th>name</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>12</td>
                            <td>12</td>
                            <td>2332</td>
                            <td>2332</td>
                            <td><input type="button" value="OK" className="btn" /></td>
                            <td><input type="button" value="OK" className="btn" /></td>
                        </tr>
                      
                    </tbody>
                </table>
                <div className="parent">
                    <div className="childOne" >
                        {listAxisChartsData.map((item, index) => {
                            return (
                                <div className="parent divBorder" key={index}>
                                    <div className="childOne "> <AxisChart data={item.chartData} /> </div>
                                    <div className="childTwo">
                                        <div className="">
                                            <table className="leftMove left">
                                                <tbody>
                                                    {item.tableData.map((ite, i) => {
                                                        return (
                                                            <tr key={ite.id}>
                                                                <td>{ite.name}</td>
                                                                <td>{ite.value}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                            <table className="leftMove right">
                                                <tbody>
                                                    <tr>
                                                        <td>良</td>
                                                        <td>{item.quantities.good}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>不良</td>
                                                        <td>{item.quantities.bad}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                    {pieChartElements}
                </div>
            </div>
        );
    }

    ///中位数
    medianofArr(values) {
        values.sort((a, b) => a - b);
        let lowMiddle = Math.floor((values.length - 1) / 2);
        let highMiddle = Math.ceil((values.length - 1) / 2);
        return (values[lowMiddle] + values[highMiddle]) / 2;
    }
    //
    getAverageNum(values) {
        let sum = values.reduce((previous, current) => current += previous);
        return (sum / values.length).toFixed(2);
    }
    //标准差
    standardDeviation(numbers) {
        var mean = 0;
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        mean = sum / numbers.length;
        sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum += Math.pow(numbers[i] - mean, 2);
        }
        return (sum / numbers.length).toFixed(2);
    }
    //获取良的产品
    GetGoodProCount(arr)
    {
        return  arr.filter(num => num >=28.5).length;
    }

   
}