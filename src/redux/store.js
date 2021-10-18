import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./pizzaSlicer";
import sortSlicer from "./sortSlicer";
export const store  = configureStore({
    reducer:{
        pizza:counterReducer,
        sort:sortSlicer
    }
});
