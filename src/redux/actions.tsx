//=======================================================Action Types Constants
const USER_AUTHORIZE = 'USER_SIGN_IN',
  USER_LOGOUT = 'USER_LOGOUT',
  FETCHING_LOADING = 'FETCHING_LOADING',
  REGISTER_FOR_LINKEDIN = 'REGISTER_FOR_LINKEDIN',
  USER_REFRESH = 'USER_REFRESH',
  CAL_ADD = 'CAL_ADD',
  CAL_SUB = 'CAL_SUB',
  CAL_APPEND = 'CAL_APPEND',
  USERIMAGE = 'USERIMAGE',
  CAL_DIFF = 'CAL_DIFF',
  NOTES = 'NOTES',
  CAL_CART = 'CAL_CART',
  CARTITEMUPDATE = 'CARTITEMUPDATE',
  PRODUCTINC = 'PRODUCTINC',
  PRODUCTDEC = 'PRODUCTDEC',
  USERLOGGED = 'USERLOGGED',
  SELECTEDUSER = 'SELECTEDUSER',
  USERDATA = 'USERDATA',
  LOGOUT = 'LOGOUT',
  ADDHORSE = 'ADDHORSE',
  ALARMMORNING = 'ALARMMORNING',
  ALARMAFTERNOON = 'ALARMAFTERNOON',
  ALARMEVENING = 'ALARMEVENING',
  ALARMNIGHT = 'ALARMNIGHT',
  UPDATE = 'UPDATE',
  FCM = 'FCM',
  VERIFY = 'VERIFY',
  BRADCART = 'BRADCART',
  UPDATECART = 'UPDATECART',
  MODLIST = 'MODLIST',
  BRADPROD = 'BRADPROD',
  BRADDEL = 'BRADDEL',
  UPDDEL = 'UPDDEL',
  DELNOTES = 'DELNOTES',
  BRADEMPTY = 'BRADEMPTY',
  BRADEMPTYMOD = 'BRADEMPTYMOD',
  BRADEMPTYALL = 'BRADEMPTYALL',
  DELUPD = 'DELUPD',
  SAVEPASSWORD = 'SAVEPASSWORD',
  REMEMBER = 'REMEMBER',
  NOTIFICATIONALERT = 'NOTIFICATIONALERT',
  SELECT_PRODUCTS = 'SELECT_PRODUCTS',
  UPDATE_PRODUCTS = 'UPDATE_PRODUCTS',
  SET_PRODUCTS = 'SET_PRODUCTS',
  DELFROMCAT = 'DEFROMCAT',
  DELFROMCATMOD = 'DEFROMCATMOD',
  ADDQUANTITY = 'ADDQUANTITY',
  ADDQUANTITYSEL = 'ADDQUANTITYSEL',
  SUBQUANTITYSEL = 'SUBQUANTITYSEL',
  ADDQUANTITYALL = 'ADDQUANTITYALL',
  ADDQUANTITYMOD = 'ADDQUANTITYMOD',
  SUBQUANTITYMOD = 'SUBQUANTITYMOD',
  SUBQUANTITY = 'SUBQUANTITY',
  SUBQUANTITYALL = 'SUBQUANTITYALL',
  QTYCHANGE = 'QTYCHANGE',
  QTYCHANGEMOD = 'QTYCHANGEMOD',
  ALLPRODUCTS = 'ALLPRODUCTS',
  DETAILS = 'DETAILS';
//========================================================Dispatchers
const userAuthorize = payload => async dispatch => {
  dispatch({type: USER_AUTHORIZE, payload});
  return '';
};
const userRefresh = payload => dispatch => {
  dispatch({type: USER_REFRESH, payload});
};
const userLKAuthorize = payload => dispatch => {
  dispatch({type: REGISTER_FOR_LINKEDIN, payload});
};
const logout = () => dispatch => {
  dispatch({type: USER_LOGOUT});
};
const bradEmpty = () => dispatch => {
  dispatch({type: BRADEMPTY});
};
const bradEmptyMod = () => dispatch => {
  dispatch({type: BRADEMPTYMOD});
};
const bradEmptyAll = () => dispatch => {
  dispatch({type: BRADEMPTYALL});
};
const bradDel = payload => dispatch => {
  dispatch({type: BRADDEL, payload});
};
const updDel = payload => dispatch => {
  dispatch({type: UPDDEL, payload});
};
const setLoader = payload => dispatch => {
  dispatch({type: FETCHING_LOADING, payload});
};
const add = () => dispatch => {
  dispatch({type: CAL_ADD});
};
const sub = () => dispatch => {
  dispatch({type: CAL_SUB});
};
const delNotes = () => dispatch => {
  dispatch({type: DELNOTES});
};
const delUpd = () => dispatch => {
  dispatch({type: DELUPD});
};
const append = payload => dispatch => {
  dispatch({type: CAL_APPEND, payload});
};
const bradCart = payload => dispatch => {
  dispatch({type: BRADCART, payload});
};
const updaCart = payload => dispatch => {
  dispatch({type: UPDATECART, payload});
};

const bradProd = payload => dispatch => {
  dispatch({type: BRADPROD, payload});
};

const diff = payload => dispatch => {
  dispatch({type: CAL_DIFF, payload});
};
const cart = payload => dispatch => {
  dispatch({type: CAL_CART, payload});
};
const cartItemUpdate = payload => dispatch => {
  dispatch({type: CARTITEMUPDATE, payload});
};
const increament = payload => dispatch => {
  dispatch({type: PRODUCTINC, payload});
};
const notes = payload => dispatch => {
  dispatch({type: NOTES, payload});
};
const decrement = payload => dispatch => {
  dispatch({type: PRODUCTDEC, payload});
};
const logged = payload => dispatch => {
  dispatch({type: USERLOGGED, payload});
};
const logoutuser = payload => dispatch => {
  dispatch({type: LOGOUT, payload});
};
const selecteduser = payload => dispatch => {
  dispatch({type: SELECTEDUSER, payload});
};
const addhorse = payload => dispatch => {
  dispatch({type: ADDHORSE, payload});
};
const alarmmorning = payload => dispatch => {
  dispatch({type: ALARMMORNING, payload});
};
const alarmafternoon = payload => dispatch => {
  dispatch({type: ALARMAFTERNOON, payload});
};
const alarmevening = payload => dispatch => {
  dispatch({type: ALARMEVENING, payload});
};
const alarmnight = payload => dispatch => {
  dispatch({type: ALARMNIGHT, payload});
};
const userdata = payload => dispatch => {
  dispatch({type: USERDATA, payload});
};
const update = payload => dispatch => {
  dispatch({type: UPDATE, payload});
};
const verify = payload => dispatch => {
  dispatch({type: VERIFY, payload});
};
const images = payload => dispatch => {
  dispatch({type: USERIMAGE, payload});
};
const fcm = payload => dispatch => dispatch({type: FCM, payload});
const savepassword = payload => dispatch => {
  dispatch({type: SAVEPASSWORD, payload});
};
const remember = payload => dispatch => {
  dispatch({type: REMEMBER, payload});
};
const modList = payload => dispatch => {
  dispatch({type: MODLIST, payload});
};
const notificationAlert = payload => dispatch => {
  dispatch({type: NOTIFICATIONALERT, payload});
};
const selectProducts = payload => dispatch => {
  dispatch({type: SELECT_PRODUCTS, payload});
};
const updateProducts = payload => dispatch => {
  dispatch({type: UPDATE_PRODUCTS, payload});
};
const setProd = payload => dispatch => {
  dispatch({type: SET_PRODUCTS, payload});
};
const delFromCat = payload => dispatch => {
  dispatch({type: DELFROMCAT, payload});
};
const delFromCatMod = payload => dispatch => {
  dispatch({type: DELFROMCATMOD, payload});
};
const addQuantity = payload => dispatch => {
  dispatch({type: ADDQUANTITY, payload});
};
const addQuantityAll = payload => dispatch => {
  dispatch({type: ADDQUANTITYALL, payload});
};
const addQuantitySel = payload => dispatch => {
  dispatch({type: ADDQUANTITYSEL, payload});
};
const addQuantityMod = payload => dispatch => {
  dispatch({type: ADDQUANTITYMOD, payload});
};
const subQuantityAll = payload => dispatch => {
  dispatch({type: SUBQUANTITYALL, payload});
};
const subQuantitySel = payload => dispatch => {
  dispatch({type: SUBQUANTITYSEL, payload});
};
const subQuantity = payload => dispatch => {
  dispatch({type: SUBQUANTITY, payload});
};
const subQuantityMod = payload => dispatch => {
  dispatch({type: SUBQUANTITYMOD, payload});
};
const qtyChange = payload => dispatch => {
  dispatch({type: QTYCHANGE, payload});
};
const qtyChangeMod = payload => dispatch => {
  dispatch({type: QTYCHANGEMOD, payload});
};
const detail = payload => dispatch => {
  console.log('i came here', payload);
  dispatch({type: DETAILS, payload});
};
const allProducts = payload => dispatch => {
  dispatch({type: ALLPRODUCTS, payload});
};
//========================================================Exporter
const ActionType = {
  FETCHING_LOADING,
  USER_REFRESH,
  USER_LOGOUT,
  USER_AUTHORIZE,
  REGISTER_FOR_LINKEDIN,
  CAL_SUB,
  SET_PRODUCTS,
  QTYCHANGE,
  CAL_ADD,
  CAL_APPEND,
  CAL_DIFF,
  NOTES,
  DELFROMCAT,
  DELFROMCATMOD,
  DELUPD,
  UPDDEL,
  DELNOTES,
  BRADEMPTYMOD,
  DETAILS,
  CAL_CART,
  ADDQUANTITYSEL,
  SUBQUANTITYSEL,
  QTYCHANGEMOD,
  ADDQUANTITYMOD,
  SUBQUANTITYMOD,
  BRADEMPTYALL,
  USERIMAGE,
  BRADEMPTY,
  CARTITEMUPDATE,
  PRODUCTINC,
  PRODUCTDEC,
  UPDATECART,
  UPDATE_PRODUCTS,
  USERLOGGED,
  LOGOUT,
  ADDQUANTITY,
  ADDQUANTITYALL,
  SUBQUANTITY,
  SUBQUANTITYALL,
  BRADPROD,
  BRADCART,
  USERDATA,
  SELECTEDUSER,
  ADDHORSE,
  ALARMMORNING,
  ALARMAFTERNOON,
  ALARMEVENING,
  ALARMNIGHT,
  BRADDEL,
  UPDATE,
  FCM,
  VERIFY,
  MODLIST,
  REMEMBER,
  SAVEPASSWORD,
  NOTIFICATIONALERT,
  SELECT_PRODUCTS,
  ALLPRODUCTS,
};
export {
  ActionType,
  userLKAuthorize,
  logout,
  setLoader,
  bradDel,
  userAuthorize,
  bradEmptyAll,
  userRefresh,
  add,
  images,
  qtyChangeMod,
  bradEmptyMod,
  delFromCat,
  notes,
  qtyChange,
  updaCart,
  modList,
  sub,
  delUpd,
  addQuantitySel,
  subQuantitySel,
  delNotes,
  setProd,
  append,
  addQuantity,
  subQuantity,
  diff,
  cart,
  verify,
  bradEmpty,
  bradCart,
  detail,
  cartItemUpdate,
  increament,
  decrement,
  bradProd,
  logged,
  logoutuser,
  userdata,
  selecteduser,
  addhorse,
  alarmmorning,
  delFromCatMod,
  alarmafternoon,
  addQuantityMod,
  addQuantityAll,
  subQuantityAll,
  subQuantityMod,
  allProducts,
  alarmevening,
  alarmnight,
  update,
  fcm,
  savepassword,
  remember,
  notificationAlert,
  selectProducts,
  updateProducts,
  updDel,
};
