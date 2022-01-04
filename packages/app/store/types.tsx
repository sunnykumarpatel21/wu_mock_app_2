import { User, UserAccount } from "../common/types/Types";

export type Action = { type: "VERIFY_USER_LOGIN", payload: { email: '', password: '' } }
    | { type: "SET_VERIFY_USER_LOGIN", payload: User }
    | { type: "GET_ACCOUNT_INFO", payload: User }
    | { type: "SET_ACCOUNT_INFO", payload: UserAccount }
    | { type: "LOGOUT_USER" };
