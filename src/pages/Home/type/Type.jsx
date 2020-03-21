import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './type.scss'
import addimg from 'assets/img/add-black.png'
import { connect } from 'react-redux'
import { changeType } from './store/'
//模式切换
class Type extends Component {
  constructor(props){
    super(props)
    this.changeType = this.changeType.bind(this)
  }


  renderItems() {
    const { typeMode, activeKey } = this.props
    return typeMode.map((item, index) => {
      let active = activeKey === item.key ? 'active' : ''
      let sleep = item.key +' '+ active
      return (
        <li key={index} className={sleep} onClick={(e) => this.changeType(e, item.key)}>
          <div className="type-icon"></div>
          <div className="type-name">{item.name}</div>
        </li>
      )
    })
  }
  add(){
    this.props.history.push('/home/add')
}
  render() {
    return (
      <div className='type'>
        <div className="type-title">
            <h4> 智能 </h4>   
            <div className='add' onClick={this.add.bind(this)}>
                      <img src={addimg} alt=""/>
            </div> 
        </div>
      
        <div className='typeContainer'>
          <ul>
            {this.renderItems()}
          </ul>
        </div>
      </div>
    )
  }


  changeType(e, activeKey) {
    this.props.dispatch(changeType({
      activeKey
    }))

  }
}

const mapState = (state) => {
  return {
    activeKey: state.typeChangeReducer.activeKey,
    typeMode: state.typeChangeReducer.typeMode
  }
}

export default withRouter( connect(mapState)(Type))

