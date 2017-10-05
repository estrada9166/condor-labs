import { combineReducers }        from 'redux'
import  formReducer               from './formReducer';
import  mainReducer            from './mainReducer';

export default combineReducers({
  formReducer,
  mainReducer
})
