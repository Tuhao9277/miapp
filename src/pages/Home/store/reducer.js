import {GET_EQUIP,UPDATE_EQUIP} from './actionType'
const initState = {
    list :[]
}
const getEquipment =(state,action) =>({
    ...state,
    list:action.obj.data.equipment
})
const updateCommonEquipment = (state,action)=>{
    let list = []
    list = state.list.concat(action.obj)
    return {
        ...state,
        list
    }
}
const homeReducer = (state=initState,action)=>{
    switch(action.type){
        case GET_EQUIP :
            return getEquipment(state,action)
        case UPDATE_EQUIP :
            return updateCommonEquipment(state,action)
                    
        default : return state
    }
}
export default homeReducer