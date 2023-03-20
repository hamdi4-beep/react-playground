import { createSlice } from '@reduxjs/toolkit'

export const indexSlice = createSlice({
    name: 'index',
    initialState: {
        value: 0
    },
    reducers: {
        incrementByAmount(state, action) {
            state.value = action.payload
        }
    }
})

export const { incrementByAmount } = indexSlice.actions
export default indexSlice.reducer