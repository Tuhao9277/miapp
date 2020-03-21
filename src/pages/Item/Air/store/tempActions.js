import { ADD_TEMP,MINUS_TEMP,GET_AIR_DATA } from './actionType';
import Axios from 'axios';
export const addTempeature = (obj) =>{
    return {
        type: ADD_TEMP,
        obj
    }
}
export const minusTempeature = (obj) =>{
    return {
        type: MINUS_TEMP,
        obj
    }
}
export const getAirData = (obj) =>async (dispatch)=>{
    let url = 'api/smarthome/airconditioner/show?'
    let res = await Axios({
        url,
        method:'get',
        params:{
            id:obj.id
        }
    })
    dispatch({
        type:GET_AIR_DATA,
        obj:res.data
    })
}