import React from 'react';
import {View, Text, AppRegistry} from 'react-native'
import CounterComponents from './app/container/CounterContainer';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import allReducres from './app/reducers/Index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './app/sagas/rootSaga'
const  sagaMiddleware=createSagaMiddleware();
let store = createStore(allReducres,applyMiddleware(sagaMiddleware));
// const App=()=>(
//     <Provider store={store}>
//       <CounterComponents/>
//     </Provider>
// )
// sagaMiddleware.run(rootSaga);
// AppRegistry.registerComponent('tutorialProject', () => App);
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CounterComponents/>
            </Provider>
        )
    }

}
sagaMiddleware.run(rootSaga);




