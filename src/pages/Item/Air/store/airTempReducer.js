import { ADD_TEMP,MINUS_TEMP, CHANGE_TEMP, GET_AIR_DATA } from "./actionType";
const initState = {
    tempeartue:26
}
const addTempeature = (state,action)=>{
    return {
        tempeartue:++action.obj.tempeartue
    }
}
const minusTempeature = (state,action)=>{

    return {
        ...state,
        tempeartue:--action.obj.tempeartue
    }
}
const changeTempearture = (state,action)=>{
    return {
        ...state,
        tempeartue:action.obj.tempeartue
    }
}
const getAirData = (state,action)=>{
    return {
        ...state,
        tempeartue:action.obj.data.temperature
    }
}
const airTempReducer = (state=initState, action) => {
    switch (action.type) {
        case ADD_TEMP:
            return addTempeature(state, action)
        case MINUS_TEMP:
            return minusTempeature(state, action)
        case CHANGE_TEMP:
            return changeTempearture(state, action)
        case GET_AIR_DATA:
            return getAirData(state,action)    
        default:
            return state
    }
}
export default airTempReducer
