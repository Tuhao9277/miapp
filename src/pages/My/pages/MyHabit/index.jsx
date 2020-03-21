import React, { Component } from 'react'
import { List } from 'antd-mobile';

import './style.scss'
import NavHeader from '../../../../components/NavHeader/NavHeader'

const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export default class MyHabit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            useage: [
                {
                    name: '空调',
                    value: '45%'
                },
                {
                    name: '空气净化器',
                    value: '25%'
                },
                {
                    name: '扫地机器人',
                    value: '20%'
                },
                {
                    name: '灯',
                    value: '10%'
                }
            ]
        }
    }
    handleBack(e) {

    }
    //在componentDidMount里面加入echart初始化代码
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart'));
        // 绘制图表
        myChart.setOption({
            title: { text: '' },
            color: "rgba(39,186,139,1)",
            tooltip: {},
            xAxis: {
                data: [0, 3, 6, 9, 12, 15, 18, 21],
                axisLabel: {
                    textStyle: {
                        fontSize: 26
                    }
                },
                axisLine: {//y轴样式
                    show: false,
                },
                splitLine: { show: false },
                axisTick: {    // 坐标轴 刻度
                    show: false,  // 是否显示
                }
            },
            yAxis: {
                axisLine: {//y轴样式
                    show: false,
                },
                splitLine: { show: false }  //改设置不显示坐标区域内的y轴分割线
            },

            axisLabel: {    // 坐标轴标签
                show: false,  // 是否显示
            },
            //控制边距　
            grid: {
                left: '0%',
                right: '0.5%',
                containLabel: false,
            },
            series: [{
                name: '销量',
                //设置柱子的宽度
                barWidth: 20,
                splitLine: { show: false },
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 40, 69, 50, 36],

            }]
        });
    }
    render() {
        return (
            <div>
                <NavHeader
                    back="back"
                    title="我的习惯"
                    path="/my"
                >
                </NavHeader>
                <div className="container">
                    <div id="echart" >
                    </div>
                    <div className="mag">
                        <p>
                            <span>设备使用</span>
                            <i>3小时25分钟</i>
                        </p>
                        <p>
                            <span>设备关闭</span>
                            <i>2小时34分钟</i>
                        </p>
                    </div>
                    <div className="list">
                        <span className="liSpan">设备使用情况</span>
                        <List>
                            {
                                this.state.useage.map(item => {
                                    return (
                                        <List.Item extra={item.value} key={item.value}>
                                            <span>{item.name}</span>
                                        </List.Item>
                                    )
                                })
                            }
                        </List>
                    </div>
                </div>
            </div>
        )
    }
}
