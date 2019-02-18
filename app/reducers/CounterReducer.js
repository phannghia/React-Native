import{INCREMENT,DECREMENT} from '../actions/actionType'
// import CounterContainer from "../container/CounterContainer";
const counterReducer=(time=0,action)=>{
    switch (action.type) {
        case INCREMENT:
            return time + action.step;
        case DECREMENT:
            return time - action.step;
        default:
            return time
        
    }

}
export default counterReducer;