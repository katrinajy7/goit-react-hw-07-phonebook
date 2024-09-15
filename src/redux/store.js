// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";
// import { filtersReducer} from 'redux/filterSlice';
// import { contactsReducer } from 'redux/contactsSlice';

// const reducers = combineReducers({
//     contacts: contactsReducer,
//     filters: filtersReducer,
// });

// export const store = configureStore({
//     reducer: reducers,
// });



import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';


const reducers = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
  });
  
  export const store = configureStore({
    reducer: reducers,
  });