import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import newReducer from './newReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    news: newReducer
});