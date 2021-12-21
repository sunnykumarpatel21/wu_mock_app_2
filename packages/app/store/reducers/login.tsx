import * as type from "../types";
import { user, userRoles } from "../../mock_data.json";
import { User } from "../../common/types/Types";

const initialState = {
    loginUser: null,
    loginError: false,

    users: user,
};

const moviesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case type.SET_VERIFY_USER_LOGIN:
            return {
                ...state,
                loginUser: action.payload,
                loginError: false,
            };

        case type.LOGOUT_USER:
            return {
                ...state,
                loginUser: null,
            };
        default:
            return state;
    }
};

export default moviesReducer;
