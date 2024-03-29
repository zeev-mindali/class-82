//import { createStore } from "redux";

import { combineReducers } from "redux";
import { CoinReducer } from "./CoinRedux";
import {configureStore} from "@reduxjs/toolkit";

//single reducer - old way (dont use it !!!)
//export const store = createStore(coinReducer);
//createStore is deprectaed function, which mean, in later version it will not be used

//multiple reducers - used before react 18
//const reducers = combineReducers({CoinReducer:coinReducer});
//const store = createStore(reducers);

//use this way....
const reducers = combineReducers({CoinState:CoinReducer});
export const store = configureStore({reducer:reducers});

