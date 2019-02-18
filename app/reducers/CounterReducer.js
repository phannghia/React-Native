import{INCREMENT,DECREMENT} from '../actions/actionType'
// import CounterContainer from "../container/CounterContainer";
const counterReducer=(time=0,action)=>{
    switch (action.type) {
        case INCREMENT:
            return ++time;
        case DECREMENT:
            return --time;
        default:
            return time
        
    }

}
export default counterReducer;