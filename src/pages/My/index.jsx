import React, { Component } from 'react'
import { connect } from "react-redux";
import { List } from 'antd-mobile';
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import set from './img/set.png'
import help from './img/help.png'
import song from './img/song.png'
import feedbackImg from './img/feedback.png'
import timg from './img/timg.png'
import BottomBar from 'components/BottomBar'


import './style.scss'
import NavHeader from '../../components/NavHeader/NavHeader'
import HeadArc from '../../components/HeadArc/HeadArc'
class My extends Component {
    constructor(props) {
        super(props)
        this.state={
            electricity:0,
            habit:[
                {
                    name:"客厅灯光",
                    value:"6小时"
                },
                {
                    name:"其他",
                    value:"8小时13分钟"
                },
            ],
            details:[
                {
                    tit:"语音设置",
                    src:song,
                    path:'/voiceSet'
                },
                {
                    tit:"设置",
                    src:set,
                    path:'/setting'
                },
                {
                    tit:"帮助",
                    src:help,
                    path:'/help'
                },
                {
                    tit:"反馈",
                    src:feedbackImg,
                    path:'/feedback'
                }
            ]
        }
       
      }
      componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('api/mine/show')
        .then(function (response) {
            _this.setState({
                electricity:response.data.data.electricity
            });
        })
        .catch(function (error) {
            _this.setState({
                electricity:0
            })
        })
      }
    render() {
        return (
            <div className="mycon">
                <NavHeader></NavHeader>
                <HeadArc></HeadArc>
                <div className="card">
                    <div className="tit">
                        <p className="user">游学者</p>
                        <NavLink to='/personal'>
                        <span>查看并编辑个人资料</span>
                        </NavLink>
                        <div className='data'>
                            <p>
                                <i>7</i>
                                <span>智能设备</span>
                            </p>
                            <p>
                                <i>¥268</i>
                                <span>本月电费</span>
                            </p>
                        </div>
                    </div>
                    <div className="titimg">
                        <div className="imgdiv">
                            <img src={timg} alt="头像"/>
                        </div>
                    </div>
                </div>
                <div className="mainData">
                <div className="myHabit">
                    <p>我的习惯</p>
                    <NavLink to='/myhabit'>
                        <span>全部</span>           
                    </NavLink>
                </div>
                <div className="habitCon">
                    <div>
                        <span>用电量</span>
                        <p>{this.state.electricity}Kwh</p>
                    </div>
                    {
                        this.state.habit.map(item=>{
                            return <div key={item.name}>
                                    <span>{item.name}</span>
                                    <p>{item.value}</p>
                                </div>
                        })
                    }
                    
                </div>
                <div className="my-menu">
                <List>
                    {
                        this.state.details.map((item,index)=>{
                            return (
                                <NavLink to={item.path} key={index}>
                                    <List.Item
                                        thumb={item.src}
                                        arrow="horizontal"
                                        >
                                        {item.tit} 
                                    </List.Item>
                                </NavLink>
                            )
                        })
                    }
                </List>
                </div>
                </div>
                <BottomBar />

            </div>
        )
    }
}

export default connect()(My)
