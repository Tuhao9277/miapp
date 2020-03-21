import { CHANGE_TAB } from "./actionType"
import { TABKEY } from "../config";
const initState = {
    tabs:[{
        name:'米家',
        key:TABKEY.home
    },{
        name:'房间',
        key:TABKEY.room
    },{
        name:'我的',
        key:TABKEY.my
    },
    ],
    activeKey:TABKEY.home
}
const changeTab = (state,action)=>{
    let activeKey = action.obj.activeKey
    return {...state,activeKey}
}
 const tabReducer = (state=initState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return changeTab(state, action)
    
        default:
            return state
    }
}
export default tabReducer