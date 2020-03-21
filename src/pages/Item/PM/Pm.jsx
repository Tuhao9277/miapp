import React, { Component } from 'react'
import './style.scss'
import  Circle from './img/roll.png'
import NavHeader from 'components/NavHeader/NavHeader'
import PmBar from './PmBar/PmBar'
import { connect } from 'react-redux';
import { getPmData } from './store/pmActions';
import {getParams} from './../../../utils/getParms'
class Pm extends Component {
    constructor(props) {
        super(props);
        let equip_id = getParams()
        this.fetchData(equip_id);
      
    }
    fetchData(id){
        this.props.dispatch(getPmData({
            id
        }))
    }
    checkPmQuailty(value){
        switch (value) {
            case value >120 :
                return "差"
            case value > 60 && value <=120 :
                return "适中"
            case value <=60: 
                return "优"
            default :return '适中'
        }
    }
    render() {
        const {
            airpq,
            comfortlevel,
            filterer,
            humidity,
            temperature,
            location,
            outdoorpm25,
            pm25,
            runconstant,
        } = this.props.list
        return (
            <div className="bg">
                <NavHeader backend={"white"} back={true} title={"米家空气净化器"} />
                <div className="main">
                    <div className="roll">
                        <img src={Circle} className="locate rolling" alt=""/>
                    <div className="circle">
                        <div className="title">
                            PM2.5参考值
                        </div>
                        <div className="data-value">
                        {pm25}
                        </div>
                        <div className="quality">
                            室内 <span>{this.checkPmQuailty(pm25)}</span>   
                        </div>
                    </div>
                    </div>
                    <div className="data-info">
                    <div className="info-item" >
                    <div className="item-title">空气净化量</div>
                    <div className="item-value">{airpq}</div>
                </div>
                <div className="info-item" >
                    <div className="item-title">温度(°C)</div>
                    <div className="item-value">{temperature}</div>
                </div>
                <div className="info-item">
                    <div className="item-title">湿度(%)</div>
                    <div className="item-value">{humidity}</div>
                </div>
                    </div>
                    <div className="green-info">
                        <ul className="info-title">
                            <li>室外 <span>{this.checkPmQuailty(outdoorpm25)}</span> </li>
                            <li>滤芯剩余(天)</li>
                            <li>舒适度 </li>
                            <li>地理位置</li>
                        </ul>
                        <ul className="info-value">
                            <li>{outdoorpm25} </li>
                            <li>{filterer} </li>
                            <li>{comfortlevel} </li>
                            <li>{location}</li>
                        </ul>
                    </div>
                    <div className="tip-group">
                <div className="tip">
                    <div className="tip-title">
                    运行 <span>{runconstant}</span> 小时
                    </div>
                    <div className="tip-desc">
                    相当于在张家界的原始森林住了97.0天，空气中细微颗粒物含量是全国平均值的1/5.
                    </div>
                </div>
                <div className="tip">
                    <div className="tip-title">
                    净化空气量
                    </div>
                    <div className="tip-desc">
                    净化空气体积相当于73.7个热气球大小，提供了442.4百万次的新鲜呼吸。
                    </div>
                </div>
                    </div>
                </div>
                <PmBar />
            </div>
        )
    }
    componentDidMount(){
       

    }
}
const mapState = state =>({
    tabs:state.pmTabReducer.tabs,
    list:state.pmReducer.list,
})
export default connect(mapState,null)(Pm)