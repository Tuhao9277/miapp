import {combineReducers} from 'redux';
import  homeReducer  from '../pages/Home/store/reducer'
import  tabReducer  from '../pages/Home/store/tabReducer'
import weatherReducer from '../pages/Home/store/weatherReducer'
import typeReducer from '../pages/Room/add/store/reducer'
import roomReducer from '../pages/Room/store/reducer'
import pmTabReducer from '../pages/Item/PM/store/pmBarReducer'
import pmReducer from '../pages/Item/PM/store/pmReducer'
import airReducer from '../pages/Item/Air/store/airReducer'
import speedReducer from '../pages/Item/Air/store/speedReducer'
import airTempReducer from '../pages/Item/Air/store/airTempReducer'
import {typeChangeReducer} from '../pages/Home/type/store/index'


const reducer =  combineReducers({
    homeReducer,
    tabReducer,
    pmTabReducer,
    pmReducer,
    airReducer,
    speedReducer,
    airTempReducer,
    weatherReducer,
    typeChangeReducer,
    typeReducer,
    roomReducer
})
export default reducer;