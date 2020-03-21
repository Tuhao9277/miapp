import React, { Component } from 'react'
import { Toast} from 'antd-mobile';
import { connect } from "react-redux";
import {getParams} from './../../../../utils/getParms'
import {changeStatus } from './../store/pmActions'
import './PmBar.scss'
import { updateCommonEquipment } from '../../../Home/store/homeActions';

/**
 * @constructor <PmBar>
 * @description  空气净化器下的TabBar
 */

class BottomBar extends Component {
 
    showToast(message,flag) {
        let equid = parseInt( getParams())
         if(message === "常用"){
             if(flag){
                Toast.success(`已添加到常用`, 1)
                this.props.dispatch(updateCommonEquipment({
                    equid,
                    type: "clean",
                    name: "空气净化器",
                    status: true,
                    img_url: "/img/pm.png"
                }))
             }
             else{
                 Toast.fail(`已取消常用`, 1);
             }
         }
         else{
             flag?Toast.success(`${message}模式已启动`, 1):Toast.fail(`${message}模式已关闭`, 1);
         }
      }
    
    changeStatus(e,item){
        this.props.dispatch(changeStatus({
            tabs:item
        }))
        let node =  e.currentTarget
        if(!node.className.includes('pm-active')){
            node.className+=" pm-active"
            this.showToast(item.name,true)
        }
            else{
                node.className = node.className.split('pm-active').join(' ')
                this.showToast(item.name,false)   
            }
            
    }
    renderItems(){
        const {tabs} = this.props   
        return tabs.map((item,index)=>{
            let running = item.status===true?' pm-active':''
            let cls = item.key + ' btn-item' +running
            let name = item.name;
            
            return (
                <div key={index} className={cls} onClick={(e)=>this.changeStatus(e,item)}>
                    <div className="tab-icon"></div>
                    <div className="btn-name">{name}</div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="pm-bar">
                {this.renderItems()}
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    tabs:state.pmTabReducer.tabs,
    // activeKey:state.tabReducer.activeKey
})
export default connect(mapStateToProps,null)(BottomBar)
