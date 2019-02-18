import {connect} from 'react-redux';
import {increaseAction, decreaseAction} from "../actions/Index"
import CounterComponents from "../components/CounterComponents";


const mapStateToProps = (state) => {
    return {
        times: state.counterReducer ? state.counterReducer : 0
    };
}
const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps")
    return {
        onDecrement: (step) => {
            console.log("mapDispatchToProps-onDecrement");
            dispatch(decreaseAction(step))
        },
        onIncrement: (step) => {
            console.log("mapDispatchToProps-onIncrement");
            dispatch(increaseAction(step))
        }
    };
};
//const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponents);
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponents);
