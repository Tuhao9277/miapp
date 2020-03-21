import React, { Component } from 'react'
import { connect } from "react-redux";
import addImg from './img/add.png'
import './style.scss'
import BottomBar from 'components/BottomBar'
import Item from 'components/Equip/EquipItem'
import { Menu, NavBar, Grid } from 'antd-mobile'
import HeadArc from 'components/HeadArc/HeadArc'
import {getRoomEquip} from './store/actionCteator'
class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      room: '',
      isRotate: true,
    }
  }
    render() {
        const menuEl = (
          <Menu
            className="single-foo-menu"
            data={this.props.data.roomname}
            level={1}
            value={this.state.room !== '' ? this.state.room : ["客厅"]}
            onChange={this.handleChangeRoom.bind(this)}
          />
        );
        return (
          <>
            <div className="myContainer">
              <NavBar
                leftContent={
                  <div onClick={this.handleRotate.bind(this)}>{this.state.room ? this.state.room : "客厅"}
                    {
                      this.state.isRotate 
                      ?<span className="rotate"></span>
                      :<span className="rotate1"></span>
                    }
                  </div>}
                mode="light"
                onLeftClick={this.handleItem.bind(this)}
                className="single-top-nav-bar"
              >
                <img src={addImg} onClick={this.handleAddItem.bind(this)} alt=""/>
              </NavBar>
              {this.state.isShow ? menuEl : null }
              <HeadArc className="header"></HeadArc>
              <Grid 
                className="grid"
                data={this.props.roomEquip} 
                activeStyle={false}
                columnNum={2}
                hasLine={false}
                onClick={this.handleChangeStatus.bind(this)}
                renderItem= {dataItem => (
                  <Item 
                    className="items"
                    equipData={dataItem}
                  ></Item>
                )}
              /> 
                <BottomBar />

            </div>
          </>
        )
    }
    handleRotate() {
      this.setState({
        isRotate: !(this.state.isRotate)
      })
    }

    handleItem() {
      this.setState({
        isShow: !(this.state.isShow)

      })
    }
    // 点击改变房间
    handleChangeRoom(value) {
      this.setState({
        room : value
      })
      const roomValue = value.toString()
      switch(roomValue){
        case "客厅":
          this.props.dispatch(getRoomEquip({
              id:1
          }))
          break;
        case "卧室":
          this.props.dispatch(getRoomEquip({
            id:2
        }))
          break;
        case "次卧":
          this.props.dispatch(getRoomEquip({
            id:3
        }))
          break;
        default : return value
      }
    }
    //点击添加设备
    handleAddItem(e) {
      this.props.history.push('/room/add')
    }
    //点击改变status的状态
    handleChangeStatus(e) {
    }
    componentDidMount(){
      this.handleChangeRoom("客厅")
    }
}

const mapState = state => ({
  "data":{
    roomname:[{
      "label": "客厅",
      "value": "客厅"
    },{
      "label": "卧室",
      "value": "卧室"
    },{
      "label": "次卧",
      "value": "次卧"
    }
  ],
  },
  roomEquip:state.roomReducer.roomEquip
})

export default connect(mapState)(Room)