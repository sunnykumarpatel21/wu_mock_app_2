import { user } from '../../mock_data.json';

const initialState = {
	loginUser: null,
	loginError: false,
	users: user
};

const mainReducer = (state = initialState, action: any) => {
	console.log("Reducer ", action, state)
	switch (action.type) {
		case "SET_VERIFY_USER_LOGIN":
			if (action.payload.loginError) {
				return { ...state, loginError: true };
			} else {
				return {
					...state,
					loginUser: action.payload,
					loginError: false
				};
			}
		case "SET_ACCOUNT_INFO":
			return {
				...state,
				accountData: action.payload,
			};
		case "SET_REPORTS":
			return {
				...state,
				reportData: action.payload,
			};
		case "LOGOUT_USER":
			return {
				...state,
				loginUser: null
			};
		default:
			return state;
	}
};

export default mainReducer;
