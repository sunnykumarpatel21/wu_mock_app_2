import { User } from '../types/Types';
import data from '../../mock_data.json';

export const fetchData = (user: { email: ''; password: '' }) => {
	let userObj: User | undefined = data.user.find((item) => item.email === user.email);
	if (userObj) {
		let roleId = userObj.role;
		let role = data.userRoles.find((item) => item.id == roleId);
		return { success: true, data: { ...userObj, userRole: role } };
	} else {
		return { success: false, error: 'user not found' };
	}
};
