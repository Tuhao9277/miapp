import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './typeadd.scss'
import backImg from './img/back.png'
import sleepImg from './img/sleep.png'
import cleanImg from './img/clean.png'
import leaveImg from './img/clean.png'
import cinemaImg from './img/cinema.png'
import visitorImg from './img/visitor.png'

export class TypeAdd extends Component {
  constructor(props){
    super(props)
    this.handleback=this.handleback.bind(this)
  }

  render() {
    return (
      
      <div className="typeAdd">
        <div className="type-header">
          <img src={backImg} alt=""  onClick={this.handleback}/>
        </div>
        <div className="typeitem">
          <p>睡眠模式</p><span> <img src={sleepImg} alt=""/></span>
        </div>
        <div className="typeitem">
          <p>清洁模式</p><span><img src={cleanImg} alt=""/></span>
        </div>
        <div className="typeitem">
          <p>离家模式</p><span><img src={leaveImg} alt=""/></span>
        </div>
        <div className="typeitem">
          <p>影院模式</p><span><img src={cinemaImg} alt=""/></span>
        </div>
        <div className="typeitem">
          <p>会客模式</p><span><img src={visitorImg} alt=""/></span>
        </div>
      </div>
    )
  }
  handleback(){
    this.props.history.goBack()
  }
}

export default withRouter (TypeAdd)
