import { combineReducers } from 'redux';
import registerReducer from './register.reducer';
import loginReducer from './login.reducer';

export default combineReducers({
    registerReducer,
    loginReducer
});