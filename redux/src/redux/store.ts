

//multiplate reducers

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthRedux";

//which reducers i will use
const reducers = combineReducers({auth:authReducer})

//combine all the reducers (sweets) to one store...
export const store = configureStore({reducer: reducers});