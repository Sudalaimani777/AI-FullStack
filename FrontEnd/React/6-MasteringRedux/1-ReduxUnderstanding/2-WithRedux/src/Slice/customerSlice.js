import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const customerSlice = createSlice({
    name: "Customer",
    initialState: initialState,
    reducers: {
        handleAddCustomer: (state, action) => {
            state.push(action.payload)
        },
        handleRemoveCustomer: (state, action) => {
            return state.filter((customer) => customer.id !== action.payload)
        }
    }
})

export const { handleAddCustomer, handleRemoveCustomer } = customerSlice.actions;
export default  customerSlice.reducer;