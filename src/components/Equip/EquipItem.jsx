import React, { Component } from 'react'
import './style.scss'
import {withRouter} from 'react-router-dom'
export class EquipItem extends Component {
  

  checktype(type,temp,status) {
      if(type === "air"){
        return temp
      }
      else{
        return status?"开":"关"
      }
  }
  handleEquipment(type,equid){

    this.props.history.push(`item/${type}?equid=${equid}`)
  }
  render() {
    const data = this.props.equipData
    const { img_url ,temp, name,type ,status,equid} = data
    return (
        <div className={status?"item active":"item" } onClick={()=>this.handleEquipment(type,equid)}>
          <span><img src={img_url} alt="" /> </span>
          <span>{name}</span>
          <span>
          {this.checktype(type,temp,status)}
          </span>
        </div>

    )
  }
}

export default withRouter(EquipItem)
