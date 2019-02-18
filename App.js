import React from 'react';
import {View, Text, AppRegistry} from 'react-native'
import CounterComponents from './app/container/CounterContainer';
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducres from './app/reducers/Index'

let store = createStore(allReducres);
/*const App=()=>(
    <Provider store={store}>
      <CounterComponents/>
    </Provider>
)*/
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CounterComponents/>
            </Provider>
        )
    }
}


