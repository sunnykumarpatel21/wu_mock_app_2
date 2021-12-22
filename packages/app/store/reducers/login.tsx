import * as type from '../types';
import { user } from '../../mock_data.json';

const initialState = {
	loginUser: null,
	loginError: false,

	users: user
};

const moviesReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case type.SET_VERIFY_USER_LOGIN:
			if (action.payload.loginError) {
				return { ...state, loginError: true };
			} else {
				return {
					...state,
					loginUser: action.payload,
					loginError: false
				};
			}
		case type.LOGOUT_USER:
			return {
				...state,
				loginUser: null
			};
		default:
			return state;
	}
};

export default moviesReducer;
