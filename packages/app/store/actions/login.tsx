import { User, UserAccount } from "../../common/types/Types";
import { Action } from "../types";

export const verifyUserLogin = (data: { email: '', password: '' }): Action => ({
    type: "VERIFY_USER_LOGIN",
    payload: data,
});

export const getAccountInfo = (data: User): Action => ({
    type: "GET_ACCOUNT_INFO",
    payload: data,
});
export const setAccountInfo = (data: UserAccount): Action => ({
    type: "SET_ACCOUNT_INFO",
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
