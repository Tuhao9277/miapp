import { CHANGE_SPEED } from "./actionType";
const initState = {
    speedValue:60
}
const changeSpeed = (state,action)=>{
    let speedValue = action.obj.progress
    return {...state,speedValue}
}
const speedReducer = (state=initState, action) => {
    switch (action.type) {
        case CHANGE_SPEED:
            return changeSpeed(state, action)
    
        default:
            return state
    }
}
export default speedReducer
