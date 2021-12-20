import * as type from '../types';
import { user, userRoles } from '../../mock_data.json';
import { User } from '../../common/types/Types';

const initialState = {
	loginUser: null,
	loginError: false,

	users: user
};

const moviesReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case type.VERIFY_USER_LOGIN:
			let userObj: User | undefined = user.find((item) => item.email === action.payload.email);
			if (userObj) {
				return {
					...state,
					loginUser: userObj,
					loginError: false
				};
			} else {
				return {
					...state,
					loginError: true
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
