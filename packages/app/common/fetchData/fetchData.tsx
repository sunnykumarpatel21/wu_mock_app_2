import { User } from "../types/Types";
import data from "../../mock_data.json";

export const fetchData = (user: User) => {
    let userObj: User | undefined = data.user.find(
        (item) => item.email === user.email
    );
    if (userObj) {
        return userObj;
    } else {
        return null;
    }
};
