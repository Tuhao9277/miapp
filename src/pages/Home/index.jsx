import React, { Component } from 'react'
import { connect } from "react-redux";
import BackAdd from './backadd/BackAdd'   //欢迎和添加
import Weather from './weather/Weather'   //天气
import Type from './type/Type'            //模式切换
import Equipment from './equipment/Equipment'   //设备
import BottomBar from 'components/BottomBar'

class Home extends Component {
  
 
    render() {
        return (
            <div >
                <BackAdd></BackAdd>   
                <Weather></Weather>
                <Type></Type>
                <Equipment></Equipment>
                <BottomBar />

            </div>
        )
    }
}
const mapState = state =>({
    checkLogin:state.homeReducer.checkLogin,
    list:state.homeReducer.list
})
export default connect(mapState,null)(Home)
