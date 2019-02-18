import React, {Component} from 'react';

import {Text, View, Image, Alert, Platform, Button} from "react-native";
//import {connect} from "react-redux";
//import {increaseAction, decreaseAction} from "../actions/Index"

//import Button from 'react-native-button';

export default class CounterComponents extends Component {
    render() {
        console.log("this.props");
        console.log(this.props);
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <Text style={{margin: 20, fontWeight: 'bold', color: 'forestgreen', fontSize: 20}}>
                    Redux Saga tutotrials
                </Text>

                <View style={{height: 50, margin: 10, flexDirection: 'row'}}>
                    <Button containerStyle={{padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
                            style={{fontSize: 18, color: 'white'}}
                            onPress={() => {
                                this.props.onDecrement(1)
                            }}
                            title={"Decrement -"}
                    />


                    <Button containerStyle={{padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
                            style={{fontSize: 18, color: 'white'}}
                            onPress={() => {
                                this.props.onIncrement(1)
                            }}
                            title={"Increment +"}
                    />


                </View>
                <Text> Count : {this.props.times}</Text>
            </View>

        );
    }


}

/*const mapStateToProps = (state) => {
    return {
        times: state.counterReducer ? state.counterReducer : 0
    };
}
const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps- dispatch")
    console.log(dispatch)
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
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponents);*/
