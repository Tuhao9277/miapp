import { CHANGE_MODE,CHANGE_SPEED,CHANGE_TEMP } from "./actionType";
export const changeMode = (obj)=>(dispatch)=>{
    dispatch({
        type:CHANGE_MODE,
        obj
    })
}
export const changeSpeed = (obj)=>(dispatch)=>{
    dispatch({
        type:CHANGE_SPEED,
        obj
    })
}
export const changeTemp = (obj)=>(dispatch)=>{
    dispatch({
        type:CHANGE_TEMP,
        obj
    })
}
