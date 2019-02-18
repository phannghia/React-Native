import {DECREMENT, INCREMENT} from '../actions/actionType'
//Saga effects
import {delay} from 'redux-saga';
import {takeEvery} from 'redux-saga/effects';

export function* sayHello() {
    console.log('Hello world !');
}

function* increment() {
    console.log(`This is increment saga`);
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment);
}

function* decrement() {
    console.log(`This is decrement saga`);
}

export function* watchDecrement() {
    //yield put({ type: INCREMENT, step: step });
    console.log(`watchDecrement saga`);
    yield takeEvery(DECREMENT, decrement);
}