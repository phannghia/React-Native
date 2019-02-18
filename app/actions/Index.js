import * as types from './actionType'

export function increaseAction(step) {
    console.log("increaseAction");
    return {
        type: types.INCREMENT,
        step: step
    }
}

export function decreaseAction(step) {
    console.log("decreaseAction");
    return {
        type: types.DECREMENT,
        step: step
    }
}