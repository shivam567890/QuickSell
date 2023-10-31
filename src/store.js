import {configureStore} from '@reduxjs/toolkit';
import { ApiDataReducer, DisplayDataReducer } from './Reducers/DataReducer';

const store = configureStore({
    reducer : {
        ApiDataReducer, DisplayDataReducer
    }
})

export default store;