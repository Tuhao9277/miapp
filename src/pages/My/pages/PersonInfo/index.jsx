import React, { Component } from 'react'
import './style.scss'
import NavHeader from '../../../../components/NavHeader/NavHeader'
import { List } from 'antd-mobile';
import timg from './img/timg.png'
const Item = List.Item;

export default class PersonInfo extends Component {
    constructor(props) {
          super(props)
          this.state={}
    }
    render(){
        return (
            <>
                <NavHeader 
                back="back"
                title="个人信息设置"
                >
                </NavHeader>
                <List renderHeader={() => 'Align Vertical Center'} className="my-list">
                    <Item 
                    arrow="horizontal"
                    className ='tit'
                    >
                    头像
                    <img className="imgMsg" src={timg} alt="图片" />
                    </Item>
                    <Item extra={'6666666'}>账号</Item>
                    <Item arrow="horizontal" onClick={() => {}}>修改密码</Item>
                    <Item arrow="horizontal" onClick={() => {}}>安全问题</Item>
                    <Item arrow="horizontal" onClick={() => {}}>安全手机</Item>
                    <Item arrow="horizontal" onClick={() => {}}>保密问题</Item>
                    <Item className="perMsg" arrow="horizontal" onClick={() => {}}>修改个人资料</Item>

                </List>
            </>
            
        )
    }
}