import { put, call, takeEvery, all } from 'redux-saga/effects';
import { setVerifyUserLogin } from '../actions/login';
import { fetchData } from '../../common/fetchData/fetchData';
import { Action } from '../types';
import { SagaResult, User } from '../../common/types/Types';

function* verifyUserLoginSaga(action: Action) {
	if (action.type === "VERIFY_USER_LOGIN") {
		const result: SagaResult<User> = yield call(fetchData, action.payload);
		if(result.success && result.data){
			yield put(setVerifyUserLogin(result.data));
		}else{
			//TODO need to handle loging fail action 
		}
	}
}

export default function* actionWatcher() {
	yield all([ takeEvery("VERIFY_USER_LOGIN", verifyUserLoginSaga) ]);
}
