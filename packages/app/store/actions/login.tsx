import { User } from "../../common/types/Types";
import * as type from "../types";

export const verifyUserLogin = (data: any) => ({
    type: type.VERIFY_USER_LOGIN,
    payload: data,
});

export const setVerifyUserLogin = (data: User) => ({
    type: type.SET_VERIFY_USER_LOGIN,
    payload: data,
});

export const logoutUser = () => {
    return {
        type: type.LOGOUT_USER,
    };
};
