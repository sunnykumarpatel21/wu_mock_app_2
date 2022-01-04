import { ReportData, User, UserAccount } from "../../common/types/Types";
import { Action } from "../types";

export const verifyUserLogin = (data: { email: '', password: '' }): Action => ({
    type: "VERIFY_USER_LOGIN",
    payload: data,
});

export const getAccountData = (data: User): Action => ({
    type: "GET_ACCOUNT_INFO",
    payload: data,
});
export const setAccountData = (data: UserAccount): Action => ({
    type: "SET_ACCOUNT_INFO",
    payload: data,
});

export const getReportData = (data: User): Action => ({
    type: "GET_REPORTS",
    payload: data,
});
export const setReportData = (data: ReportData): Action => ({
    type: "SET_REPORTS",
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
