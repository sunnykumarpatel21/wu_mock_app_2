import { combineReducers } from 'redux';
import login from './main';

const rootReducer = combineReducers({
	main: login
});

export default rootReducer;
