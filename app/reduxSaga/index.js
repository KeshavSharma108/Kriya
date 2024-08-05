import { all,fork } from "redux-saga/effects";
import { watchAuthServices } from "./AuthSaga";
import { watchDoctorsServices } from "./doctorSaga";
import { watchProfileServices } from "./profileSaga";

export default function* rootSaga(){
    yield all ([
        fork(watchAuthServices),
        fork(watchDoctorsServices),
        fork(watchProfileServices)
    ])
}