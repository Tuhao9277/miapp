import { GET_LIST_DATA} from "./actionType";
const initState = {
    list:{},
}
const getListData = (state,action)=>({
    ...state,
    list:action.obj.data
})

 const pmTReducer = (state=initState, action) => {
    switch (action.type) {
        case GET_LIST_DATA :
            return getListData(state,action)
        default:
            return state
    }
}
export default pmTReducer