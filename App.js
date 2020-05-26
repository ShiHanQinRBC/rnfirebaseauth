import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import SwitchNavigator from './navigation/SwitchNavigator'
import reducer from './reducers'


//import {decode, encode} from 'base-64'
import base64 from 'react-native-base64'

if (!global.btoa) {  global.btoa = base64.encode }

if (!global.atob) { global.atob = base64.decode }

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SwitchNavigator />
            </Provider>
        )
    }
}