import { User } from "../common/types/Types";

export type Action = { type: "VERIFY_USER_LOGIN", payload: { email: '', password: '' } }
    | { type: "SET_VERIFY_USER_LOGIN", payload: User }
    | { type: "LOGOUT_USER" };
