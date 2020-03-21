import React, { Component ,Fragment} from 'react'
import './style.scss'
import { withRouter } from 'react-router-dom'

/**
 * @title 标题 {string}
 * @back 后退 {Boolean}
 * @backend 背景色 {white black}
 */
class NavHeader extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this)
    }
    
    handleBack(){
        this.props.history.goBack();
    }
    renderHeader(){
        const {backend,back,title} = this.props
        if(backend==="white"){
           return (
           <div className="nav white">
                        <div className={back?"back-icon icon-white":null} onClick={()=>{this.handleBack()}}></div>
                        <h4 className="title black">{title}</h4>
            </div>
           ) 
        }else{
            return (
                <div className="nav">
                        <div className={back?"back-icon":null} onClick={()=>{this.handleBack()}}></div>
                        <h4 className="title">{title}</h4>
            </div>
            )
        }
    }
    render() {
        return (
            <Fragment>
                {this.renderHeader()}
            </Fragment>
        )
    }
}
export default withRouter(NavHeader)
