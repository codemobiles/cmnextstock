import { combineReducers } from 'redux';
import registerReducer from './register.reducer';
import loginReducer from './login.reducer';
import stockListReducer from './stockList.reducer';
import stockCreateReducer from './stockCreate.reducer';
import stockEditReducer from './stockEdit.reducer';


export default combineReducers({
    registerReducer,
    loginReducer,
    stockListReducer,
    stockCreateReducer,
    stockEditReducer,
});