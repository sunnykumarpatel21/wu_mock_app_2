import { User } from "../types/Types";

export const getAccontInfo = async (user:User) => {
	const res = await fetch("/api/mock?action=accountInfo", {
		// Adding method type
		method: "POST",
		// Adding body or contents to send
		body: JSON.stringify(user),
		// Adding headers to the request
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	const data = await res.json()
	console.log("getAccountInfo 1-",data)
	if(data && res.status == 200){
		return { success: true, data: data};
	}else {
		return { success: false, error: data?.error };
	}
};

export const verifyUser = async (user: { email: ''; password: '' }) => {
	const res = await fetch("/api/mock?action=verifyUser", {
		// Adding method type
		method: "POST",
		// Adding body or contents to send
		body: JSON.stringify(user),
		// Adding headers to the request
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	const data = await res.json()
	if(data && res.status == 200){
		return { success: true, data: data};
	}else {
		return { success: false, error: data?.error };
	}
};

