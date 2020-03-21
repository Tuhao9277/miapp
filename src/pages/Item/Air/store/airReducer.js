import { CHANGE_MODE } from "./actionType";
import { MODEKEY } from "./../config";
const initState = {
    airMode:[{
        name:'自动',
        key:MODEKEY.auto
    },{
        name:'制冷',
        key:MODEKEY.ice,
    },{
        name:'除湿',
        key:MODEKEY.humidity
    },{
        name:'送风',
        key:MODEKEY.supply
    },
    ],
    activeKey:MODEKEY.ice
}
const changeMode = (state,action)=>{
    let activeKey = action.obj.activeKey
    return {...state,activeKey}
}
const airReducer = (state=initState, action) => {
    switch (action.type) {
        case CHANGE_MODE:
            return changeMode(state, action)
    
        default:
            return state
    }
}
export default airReducer
