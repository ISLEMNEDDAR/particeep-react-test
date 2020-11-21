import {all} from 'redux-saga/effects'
import film from "./film/sagas";

export default function* rootSaga(){
    yield all([
        film()
    ])
}