import { GET_TYPELIST } from './actionType'

import Axios from 'axios'

export const getTypelist = (obj) => async (dispatch)=> {
  let url = '/json/type_list.json'
  let res = await Axios({
    url,
    method : 'GET',
  })
  dispatch( {
    type:GET_TYPELIST,
    obj:res.data
})
}
