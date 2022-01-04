import { put, call, takeEvery, all } from 'redux-saga/effects';
import { setAccountInfo, setVerifyUserLogin } from '../actions/login';
import { getAccontInfo, verifyUser } from '../../common/data/ApiHelper';
import { Action } from '../types';
import { SagaResult, User, UserAccount } from '../../common/types/Types';

function* verifyUserLoginSaga(action: Action) {
	if (action.type === "VERIFY_USER_LOGIN") {
		const result: SagaResult<User> = yield call(verifyUser, action.payload);
		if (result.success && result.data) {
			yield put(setVerifyUserLogin(result.data));
		} else {
			//TODO need to handle loging fail action 
		}
	}
}

function* getAccountInfo(action: Action) {
	if (action.type === "GET_ACCOUNT_INFO") {
		const result: SagaResult<UserAccount> = yield call(getAccontInfo, action.payload);
		if (result.success && result.data) {
			yield put(setAccountInfo(result.data));
		} else {
			//TODO need to handle loging fail action 
		}
	}
}

export default function* actionWatcher() {
	yield all([takeEvery("VERIFY_USER_LOGIN", verifyUserLoginSaga),
	takeEvery("GET_ACCOUNT_INFO", getAccountInfo)]);
}
