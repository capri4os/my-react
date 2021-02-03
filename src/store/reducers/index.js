import {combineReducers} from 'redux';
import messageReducer from './messages';
import chatReducer from './chat';

export default combineReducers({
    messageReducer,
    chatReducer,
});