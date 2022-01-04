import { put, call, takeEvery, all } from 'redux-saga/effects';
import { getReportData, setAccountData, setReportData, setVerifyUserLogin } from '../actions/login';
import { fetchAccountData, fetchReportsData, verifyUser } from '../../common/data/ApiHelper';
import { Action } from '../types';
import { ReportData, SagaResult, User, UserAccount } from '../../common/types/Types';

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
		const result: SagaResult<UserAccount> = yield call(fetchAccountData, action.payload);
		if (result.success && result.data) {
			yield put(setAccountData(result.data));
		} else {
			//TODO need to handle loging fail action 
		}
	}
}

function* getReportsInfo(action: Action) {
	if (action.type === "GET_REPORTS") {
		const result: SagaResult<ReportData> = yield call(fetchReportsData, action.payload);
		if (result.success && result.data) {
			yield put(setReportData(result.data));
		} else {
			//TODO need to handle loging fail action 
		}
	}
}

export default function* actionWatcher() {
	yield all([takeEvery("VERIFY_USER_LOGIN", verifyUserLoginSaga),
	takeEvery("GET_ACCOUNT_INFO", getAccountInfo),
	takeEvery("GET_REPORTS", getReportsInfo)]);
}
