import React, { Component } from 'react'
import './style.scss'
import NavHeader from '../../../../components/NavHeader/NavHeader'
import { List } from 'antd-mobile';
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
                title="帮助"
                >
                </NavHeader>
                <List renderHeader={() => 'Align Vertical Center'} className="my-list">
                    <Item arrow="horizontal" onClick={() => {}}>空调使用相关问题</Item>
                    <Item arrow="horizontal" onClick={() => {}}>扫地机器人使用相关问题</Item>
                    <Item arrow="horizontal" onClick={() => {}}>空气净化器使用相关问题</Item>
                    <Item arrow="horizontal" onClick={() => {}}>生活电器等使用相关问题</Item>
                </List>
            </>
            
        )
    }
}