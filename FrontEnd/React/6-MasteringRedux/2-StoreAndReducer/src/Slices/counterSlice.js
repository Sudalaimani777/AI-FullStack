import { createSlice } from "@reduxjs/toolkit";

const countState = {
    count:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState: countState,
    reducers:{
        handleInc: (state) => { //The action is counter/handleInc
            state.count += 1;
        },
        handleDec: (state) => { //The action is counter/handleDec 
            state.count -= 1;
        }
    }
})

export const {handleDec, handleInc} = counterSlice.actions;

export default counterSlice.reducer