import './style.scss'

import React, { Component } from 'react'

import { connect } from "react-redux";

import { NavLink, withRouter } from 'react-router-dom';

// import {changeTab} from '../store/actions/actionCreator'

import './style.scss'

/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */

class BottomBar extends Component {

    changeTab(item){
        this.props.history.replace(item.key);
    }
    renderItems(){
        const {tabs} = this.props   
        return tabs.map((item,index)=>{
            let cls = item.key + ' btn-item';
            let name = item.name;

            return (
                <NavLink key={index} className={cls} replace={true} to={"/" + item.key} activeClassName="active" onClick={()=>this.changeTab(item)}>
                    <div className="tab-icon"></div>
                    <div className="btn-name">{name}</div>
                </NavLink>
            )
        })
    }
    render() {
        return (
            <div className="bottom-bar">
                {this.renderItems()}
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    tabs:state.tabReducer.tabs,
    activeKey:state.tabReducer.activeKey
})
export default withRouter(connect(mapStateToProps,null)(BottomBar))
