import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        address: {}
    },
    reducers: {
        updateAddress(state, action) {
            const { payload } = action;
            state.address = { ...state.address, ...payload }
        },
        updatePayment(state, action) {
            const { payload } = action;
            state.payment = { ...state.payment, ...payload }
        },
        clearCheckoutInformation(state) {
            state.address = {}
            state.payment = {}
        }
    }
})

export const { updateAddress } = checkoutSlice.actions
export const { updatePayment } = checkoutSlice.actions
export const { clearCheckoutInformation } = checkoutSlice.actions
export default checkoutSlice.reducer
