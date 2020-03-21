import React, { Component } from 'react'
import NavHeader from 'components/NavHeader/NavHeader'
import CirCleSlider from 'components/CircleSlider';
import {connect} from 'react-redux'
import speedHigh from './img/speed-high.png'
import speedLow from './img/speed-low.png'
import dir from './img/dir.png'
import './Air.scss'
import './animate.css'
import {getParams} from './../../../utils/getParms'
import {changeMode, changeSpeed,changeTemp} from './store/airActions'
import { getAirData } from './store/tempActions';
 class Air extends Component {
     constructor(props) {
         super(props);
         this.state = {
             power:true,
             tempeartue:16,
             timer:false,
             lasttime:''
         }
         this.props.dispatch(getAirData({
             id:getParams()
         })).then(() => {
            this.setState({
                tempeartue:this.props.tempeartue
            })
         })
        
     }
     
    checkSpeed(val){
        let value = parseInt(val)
        if(value >=60){
            return "高"
        } else if (value <60 && value>40){
            return "中"
        }else{
            return "低"
        }
    }
    changeMode(e,activeKey){
            this.props.dispatch(changeMode({
                activeKey
            }))
            let currentModeNode = e.currentTarget
            if(currentModeNode.className.includes('ice')){
                let originIce = currentModeNode.children[0]
                let originAngle = originIce.style.transform.replace(/[^0-9]/gi, '')
                if (originAngle) {
                    originAngle = parseInt(originAngle, 10);
                } else {
                    originAngle = 0;
                }
                originIce.style.transform = 'rotate(' + (originAngle + 1080) + 'deg)'
            }
    }
    findMode(mode){
        const {activeKey} = this.props   
       return mode.find((obj)=>{
            return obj.key === activeKey
        }).name;

    }
    renderItems(){
        const {airMode,activeKey} = this.props   
        return airMode.map((item,index)=>{
            let active = activeKey === item.key ? ' mode-active':''
            let cls = item.key + ' state-item' + active
            let name = item.name;
            
            return (
                <div key={index} className={cls} onClick={(e)=>this.changeMode(e,item.key)}>
                    <div className="state-icon"></div>
                    <div className="state-name">{name}</div>
                </div>
            )
        })
    }
    onProgressChange(progress){
        this.checkSpeed(progress)
        this.refs.progress.style.backgroundSize = `${progress}% 100%`
        this.props.dispatch(changeSpeed({progress}))
    }
    addTempeature(){
        let {tempeartue} = this.state
        if(tempeartue === 31 ) return ;
        this.setState({
            tempeartue:++tempeartue
        },()=>{
            this.props.dispatch(changeTemp({
                tempeartue:this.state.tempeartue
            }))
        })
    }
    minusTempeature(){
        let {tempeartue} = this.state
        if(tempeartue === 16 ) return ;
        this.setState({
            tempeartue:--tempeartue
        },()=>{
            this.props.dispatch(changeTemp({
                tempeartue:this.state.tempeartue
            }))
        })
    }
    showTimer(){
        if(this.state.timer){
            this.setState({
                timer:false
            })
        }else{
            this.refs.menu.style.transform='translate3d(0, 0, 0)'
                this.refs.mark.style.display='block'
        }

    }
    hideMenu(){
        this.refs.mark.style.display='none'
    this.refs.menu.style.transform='translate3d(0, 100%, 0)'

    }
    changeDir(){
        let originAngle = this.refs.dir.style.transform.replace(/[^0-9]/gi, '')
        if (originAngle === '90') {
            this.refs.dir.style.transform = 'rotate(' + 0 + 'deg)'
        } else {
            this.refs.dir.style.transform = 'rotate(' + (originAngle + 90) + 'deg)'
        }
    }
    handlePower(){
        this.setState({
            power:!this.state.power
        })
    }
    handleTemp = (val)=>{
        this.setState({
            tempeartue:val
        })
    }
    handleTimer(e){
        const lastTime = e.target.innerText.match(/[0-9]\d*/g)
        if(lastTime != null){
            this.setState({
                timer:true,
                lasttime:lastTime.toString()
            })
            this.hideMenu()
        }
    }
    render() {
        const {airMode,speedValue} = this.props   
        const {tempeartue} = this.state
        return (
            <div>
            <div className="bg">
                  <NavHeader backend={"white"} back={true} title={"米家智能变频空调"} />
                  <div className="main">
                      <div className="slide-round">
                          <div className="slide-control">
                               <CirCleSlider
                                 width={446}
                                 height={446}
                                 r={200}
                                 angle={120}
                                 step={1}
                                 min={16}
                                 max={31}
                                 tabR={21}
                                 outArcColor={'#cbcbcb'}
                                 strokeWidth={18}
                                 tabStrokeWidth={3}
                                 tabColor={"#fff"}
                                 progressvalue={"#17BB8A"}
                                 value={tempeartue}
                                 onValueChange={this.handleTemp.bind(this)}
                               />
                          </div>
                        <div className="tempeartue">
                            <div className="display-info">
                            <div className="temp-value">{tempeartue}</div> 
                            <div className="air-mode" ref="airMode">{this.findMode(airMode)}</div>
                            </div>
                            <div className="air-speed">
                                <div className="speed-item"><img src={speedHigh} alt=""/>风速 {this.checkSpeed(speedValue) }</div>
                                <div className="speed-item">
                                <img src={dir} alt=""/>
                                    风向 
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="state-control">
                      {this.renderItems()}
                    </div>
                    <div className="progress-wrapper">
                        <div className="speed-low">
                            <img src={speedLow} alt="" />
                        </div>
                    <input
                            type="range"
                            ref="progress"
                            min="0"
                            max="100"
                            step="1"
                            value={speedValue}
                            onChange={(e)=>this.onProgressChange(e.target.value)}
                            className="progress"
                            />
                    <div className="speed-high">
                            <img src={speedHigh} alt="" />
                        </div>
                    </div>
                    <div className="temp-control">
                        <div className={this.state.power?"air-power on":"air-power off"} onClick={()=>{this.handlePower()}}>
                            <div className="power-icon"></div>
                        </div>
                        <div className="minus air-temp" onClick={()=>this.minusTempeature()}>
                        <div className="minus-icon" ></div>
                        </div>
                        <div className="add air-temp" onClick={()=>this.addTempeature()}>
                        <div className="add-icon" ></div>
                        </div>
                    </div>
                   
                    <div className="bottom-control">
                        <div className="dir bottom-item" onClick={()=>this.changeDir()} >
                            <div className="bottom-control-item-icon" ref="dir"></div>
                            <div className="bottom-control-item-name">
                                风向
                            </div>
                        </div>
                        <div className={this.state.timer?"clock bottom-item on":"clock bottom-item"} ref="clock" onClick={()=>{this.showTimer()}}>
                            {
                                this.state.timer?<div style={{color:"#fff"}}>{this.state.lasttime}</div>:
                            <>
                            <div className="bottom-control-item-icon"></div>
                            <div className="bottom-control-item-name">
                                定时 
                            </div>
                            </>
                            }
                        </div>
                        <div className="more bottom-item" >
                            <div className="bottom-control-item-icon"></div>
                            <div className="bottom-control-item-name">
                                更多
                            </div>
                        </div>
                    </div>
                  </div>
                  <div ref="mark" className="bottom-menu-mark" onClick={()=>this.hideMenu()}></div>
            <div className={'timer menu'} ref="menu">
                    <ul className="items" onClick={(e)=>{this.handleTimer(e)}}>
                    <li className="time-item title">
                            请选择时间
                        </li>
                        <li className="time-item">
                            5分钟
                        </li>
                        <li className="time-item">
                            10分钟
                        </li>
                        <li className="time-item">
                            15分钟
                        </li>
                      

                    </ul>
                    </div>
            </div>
            </div>
        )
    }
    componentDidMount(){
        this.onProgressChange(this.props.speedValue)
        
    }

}
const mapState = state=>({
    airMode:state.airReducer.airMode,
    activeKey:state.airReducer.activeKey,
    speedValue:state.speedReducer.speedValue,
    tempeartue:state.airTempReducer.tempeartue
})
export default connect(mapState,null)(Air)

