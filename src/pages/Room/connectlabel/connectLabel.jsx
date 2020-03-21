import React, { Component } from 'react';
import {connect} from 'react-redux'
import './style.scss';
import NavHeader from '../../../components/NavHeader/NavHeader';
import {updateRoomEquip} from './../store/actionCteator'
class connectLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '选择标签',
      back: 'true',
      roomList:[
        {
          name:'客厅',
          key:1
        },
        {
          name:'卧室',
          key:2
        },
        {
          name:'次卧',
          key:3
        }
      ],
      activeKey:1
    };
  }
  changeRoom(e,key){
    this.setState({
      activeKey:key
    })
  }
  renderItems(){
    const {roomList,activeKey} = this.state   
    return roomList.map((item,index)=>{
        let active = activeKey === item.key ? ' room-list-active':''
        let cls = item.key + ' room-list-item' + active
        let name = item.name;
        
        return (
            <li key={index} className={cls} onClick={(e)=>this.changeRoom(e,item.key)}>
              {name}
            </li>
        )
    })
}
  handleClick() {
    const {activeKey} = this.state
    let result = {
      ...this.props.location.state,
      roomid:activeKey
    }
    this.props.dispatch(updateRoomEquip({
      result
    }))
    this.props.history.push('/room');
  }
  componentWillMount() {
  }
  render() {
    const { name, img_url } = this.props.location.state;
    return (
      <div className="label-wrapper">
        <NavHeader title={this.state.title} back={this.state.back}></NavHeader>
        <div className="choose-main-wrapper">
          <div className="equip-profile">
            <img
              src={img_url}
              alt=""
            />
            <div className="equname">{name}</div>
          </div>
          <div className="select-place">
            <div className="place">选择所在位置</div>
            <ul className="room-list">
              {this.renderItems()}
            </ul>
          </div>
          <button
            onClick={() => {
              this.handleClick();
            }}
          >
            添加
          </button>
        </div>
      </div>
    );
  }
}
 export default connect()(connectLabel)