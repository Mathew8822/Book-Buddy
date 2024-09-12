import { configureStore } from '@reduxjs/toolkit'
import searchBookReducer from '../slice/searchBookSlice';

export const store = configureStore({
    reducer: {
        searchBook: searchBookReducer,
      },
})
