import {createSlice} from '@reduxjs/toolkit'

export const searchBookSlice = createSlice({
    name: "searchBook",
    initialState: '',
    reducers: {
        setSearchBook: (state, action) => {
            console.log("State", state)
            console.log("Action", action)
            return action.payload
        }
    }
})

export const { setSearchBook }  = searchBookSlice.actions;
export default searchBookSlice.reducer
