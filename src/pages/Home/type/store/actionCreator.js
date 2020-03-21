import { CHANGE_TYPE } from "./actionType";
export const changeType = (obj)=>(dispatch)=>{
    dispatch({
        type:CHANGE_TYPE,
        obj
    })
}
