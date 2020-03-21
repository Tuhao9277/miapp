import {GET_WEATHER_DATA} from './actionType'
const initState = {
    weather:{
        basic: {
            location:''
        },
        now:{
            cond_txt:'',
            tmp:''
        }
    }
}
const getWeather =(state,action) =>{
   return {
       ...state,
       weather: action.obj.data.HeWeather6[0]
   } 

}
const homeReducer = (state=initState,action)=>{
    switch(action.type){
        case GET_WEATHER_DATA :
            return getWeather(state,action)
        default : return state
    }
}
export default homeReducer