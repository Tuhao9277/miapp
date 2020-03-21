import React, { Component } from 'react'
import './style.scss'
import { withRouter } from 'react-router-dom'
import {getWeeks} from './../../../utils/getWeeks'
class BackAdd extends Component {
    render() {
        return (   
            <div className='back-add'>
                <div className='back'>
                    我可爱的家
                </div>
            <div className="weeks">
            {getWeeks()}
            </div>
            </div>

        )
    }
}
export default withRouter(BackAdd)