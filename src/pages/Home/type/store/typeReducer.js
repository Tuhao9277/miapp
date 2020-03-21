import { CHANGE_TYPE } from "./actionType";
import { MODEKEY } from "./config";
const initState = {
    typeMode:[{
        name:'在家',
        key:MODEKEY.leave
    },{
        name:'睡眠',
        key:MODEKEY.sleep,
    },{
        name:'清洁',
        key:MODEKEY.clean
    },{
        name:'影院',
        key:MODEKEY.cinema
    }
    ],
    activeKey:MODEKEY.leave
}
const changeMode = (state,action)=>{
    let activeKey = action.obj.activeKey
    return {...state,activeKey}
}
const typeChangeReducer = (state=initState, action) => {
    switch (action.type) {
        case CHANGE_TYPE:
            return changeMode(state, action)
    
        default:
            return state
    }
}
export default typeChangeReducer

