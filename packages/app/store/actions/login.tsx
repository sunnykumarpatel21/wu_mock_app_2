import { User } from "../../common/types/Types";
import { Action } from "../types";

export const verifyUserLogin = (data: { email: '', password: '' }): Action => ({
    type: "VERIFY_USER_LOGIN",
    payload: data,
});

export const setVerifyUserLogin = (data: User): Action => ({
    type: "SET_VERIFY_USER_LOGIN",
    payload: data,
});

export const logoutUser = (): Action => {
    return {
        type: "LOGOUT_USER",
    };
};
