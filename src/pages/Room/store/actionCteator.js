import { GET_ROOM_EQUIP,UPDATE_ROOM_EQUIP} from './actionType'

import Axios from 'axios'

export const getRoomEquip = (obj) => async (dispatch)=> {
  let url = `/json/room_${obj.id}.json`
  let res = await Axios({
    url,
    method : 'GET',
  })
  dispatch( {
    type:GET_ROOM_EQUIP,
    obj:res.data,
    roomid:obj.id
})
}
export const updateRoomEquip = (obj) =>async (dispatch)=>{

  dispatch( {
    type:UPDATE_ROOM_EQUIP,
    obj
})
}