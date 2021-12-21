import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import loginSaga from "./saga/loginSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = () => {
    const generateStore = createStore(
        rootReducer,
        compose(applyMiddleware(...middleware))
    );
    sagaMiddleware.run(loginSaga);
    return generateStore;
};

export const wrapper = createWrapper(store);
