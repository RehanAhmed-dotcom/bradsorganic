import {combineReducers} from 'redux';
import appReducer from './appReducer';
import CalReducer from './calReducer';
import CheckReducer from './checkReducer';
import alarmReducer from './alarmReducer';
import CartReducer from './cartReducer';
import userReducer from './userReducer';
import AddHorse from './horseReducer';
import CartBrad from './bradsCartReducer';
import notificationReducer from './notification';
export default combineReducers({
  CHECK: CheckReducer,
  BCART: CartBrad,
  USER: userReducer,
  ALARM: alarmReducer,
  CART: CartReducer,
  CAL: CalReducer,
  NOTIFICATION: notificationReducer,
  APPSTATE: appReducer,
  ADD: AddHorse,
});
