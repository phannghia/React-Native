import {delay} from 'redux-saga'
import {all} from 'redux-saga/effects'
import {sayHello} from "./couterSaga";
import {watchDecrement, watchIncrement} from './couterSaga'


export default function* rootSaga() {
    yield all([
        sayHello,
        watchIncrement(),
        watchDecrement()
    ]);
}