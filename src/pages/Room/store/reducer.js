import { GET_ROOM_EQUIP,UPDATE_ROOM_EQUIP} from './actionType'

const initState = {
  roomEquip:[]
}

const getRoomEquip = (state, action) => ({
  ...state,
  roomEquip:action.obj.data
})
const updateRoomEquip = (state, action) => {
  let list = [];
        list =  state.roomEquip.concat(action.obj);
    
    return {...state,
      roomEquip: list
    }


}
const roomReducer = (state=initState,action)=>{
  switch(action.type){
      case GET_ROOM_EQUIP :
      return getRoomEquip(state,action)
      case UPDATE_ROOM_EQUIP:
      return updateRoomEquip(state,action)
      default : return state
  }
}

export default roomReducer