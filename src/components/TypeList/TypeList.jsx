import React, { Component } from 'react'

import { Link } from 'react-router-dom'


import './style.scss'
export default class TypeList extends Component {
  render() {
    const { img_url,name,equid} = this.props.typeData
    const tempEquipment = {
      equid,
      name,
      img_url
    }
    return (
      <Link to={{pathname:'/room/connectlabel',state:tempEquipment}}>
        <div className="option">
          <img src={img_url} alt="" style={{background:"transparent"}}/>
          <span className="subName">{name}</span>
        </div>
      </Link>
    )
  }
}



