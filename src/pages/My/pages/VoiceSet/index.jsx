import React, { Component } from 'react'
import './style.scss'
import NavHeader from '../../../../components/NavHeader/NavHeader'
import { List } from 'antd-mobile';
import song from './img/song.png'

const Item = List.Item;

export default class VoiceSet extends Component {
    constructor(props) {
          super(props)
          this.state={}
    }
    render(){
        return (
            <>
                <NavHeader 
                back="back"
                title="语音设置"
                path="/my"
                >
                </NavHeader>
            <List className="list" renderHeader={() => ''}>
            <Item
              thumb={song}
              arrow="horizontal"
              onClick={() => {}}
            >小爱设置</Item>
            <Item
              thumb={song}
              onClick={() => {}}
              arrow="horizontal"
              className="listItem"
            >
              语音别名设置
            </Item>
            </List>
            </>
            
        )
    }
}