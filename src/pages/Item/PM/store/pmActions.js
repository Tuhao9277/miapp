import { CHANGE_STATUS,GET_LIST_DATA } from "./actionType";
import Axios from "axios";

export const changeStatus = (obj)=>(dispatch)=>{
    dispatch({
        type:CHANGE_STATUS,
        obj
    })
}
export const getPmData = (obj) =>async (dispatch)=>{
    let url = 'api/smarthome/pm25/show'
    let res = await Axios({
        url,
        method:'get',
        params:{
            id:obj.id
        }
    })
    dispatch({
        type:GET_LIST_DATA,
        obj:res.data
    })
}