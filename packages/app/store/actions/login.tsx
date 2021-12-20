import * as type from '../types';

export const verifyUserLogin = (data: any) => {
	return {
		type: type.VERIFY_USER_LOGIN,
		payload: data
	};
};
export const logoutUser = () => {
	return {
		type: type.LOGOUT_USER
	};
};
