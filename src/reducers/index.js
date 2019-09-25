import {combineReducers } from 'redux';
import citasReducer from './citasReducer';
import validacionReducer from './validacionReducer';

//union of all declared reducers
export default combineReducers({
    citas: citasReducer,
    error: validacionReducer
})