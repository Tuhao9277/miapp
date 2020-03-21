import { CHANGE_STATUS} from "./actionType";
const initState = {
    tabs:[
    {
        id:0,
        name:'关机',
        status:true,
        key:'off'
    },{
        id:1,
        name:'自动',
        status:false,
        key:'auto'
    },{
        id:2,
        name:'睡眠',
        status:false,
        key:'sleep'
    },
    {
        id:3,
        name:'常用',
        status:false,
        key:'favor'
    }
    ],
}
const changeStatus = (state,action)=>({
    tabs:changeStates(state,action)
})
const changeStates = (state,action)=>{
    let newTabs = state.tabs;
    let index = action.obj.tabs.id
    newTabs[index].status = !newTabs[index].status
    return newTabs

}
 const pmTabReducer = (state=initState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return changeStatus(state,action)
        default:
            return state
    }
}
export default pmTabReducer