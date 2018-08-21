import {combineReducers} from 'redux';
import authReducer from './auth.js';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
});

export default rootReducer;
