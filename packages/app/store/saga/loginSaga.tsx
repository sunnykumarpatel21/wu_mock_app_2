import { put, call, takeEvery, all } from "redux-saga/effects";
import { VERIFY_USER_LOGIN } from "../types";
import { setVerifyUserLogin } from "../actions/login";
import { fetchData } from "../../common/fetchData/fetchData";

function* verifyUserLoginSaga(action: { payload: any }) {
    const data = yield call(fetchData, action.payload);
    console.log(data);
    yield put(setVerifyUserLogin(data));
}

export default function* actionWatcher() {
    yield all([takeEvery(VERIFY_USER_LOGIN, verifyUserLoginSaga)]);
}
