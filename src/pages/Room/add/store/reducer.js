import { GET_TYPELIST } from './actionType'

const initState = {
  list: []
}

const getTypelist = (state, action) => ({
  ...state,
  list:action.obj.data.category_list
})
const typeReducer = (state=initState,action)=>{
  switch(action.type){
      case GET_TYPELIST :
          return getTypelist(state,action)
      default : return state
  }
}

export default typeReducer