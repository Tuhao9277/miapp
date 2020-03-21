import Axios from 'axios'
import {GET_EQUIP,CHANGE_TAB,GET_WEATHER_DATA,UPDATE_EQUIP} from './actionType'
export const getEquipment = ()=> async (dispatch)=>{
    let url = '/json/common.json'
    let res = await Axios({
        url,
        method : 'GET',
    })
    await res.data.status
    dispatch( {
        type:GET_EQUIP,
        obj:res.data
    })
    
}
export const updateCommonEquipment = (obj)=>(dispatch)=>{
    dispatch({
        type:UPDATE_EQUIP,
        obj
    })
}
export const getWeatherData = ()=> async (dispatch) =>{
    let resp = await Axios({
        url: 'https://free-api.heweather.net/s6/weather/now?location=beijing&key=af0aae9a20464e619f5052b973b8bee7',
        method: 'get'
    });
    dispatch({
        type: GET_WEATHER_DATA,
        obj: resp
    })
}
export const changeTab = (obj)=>{
    return {
        type:CHANGE_TAB,
        obj
    }
}