import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './data-slice';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: { data: dataReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
