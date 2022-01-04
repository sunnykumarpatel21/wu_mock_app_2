export const verifyUser = async (user: { email: ''; password: '' }) => {
	const res = await fetch("/api/user", {
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
