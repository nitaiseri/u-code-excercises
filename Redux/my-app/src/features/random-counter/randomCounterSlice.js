import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'idle',
};


export const randomCounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementRandom: (state) => {
            state.value += Math.random();
        },
        incrementRandomNotRandom: (state, amount) => {
            state.value += amount.payload;
        }
    },
});

export const { incrementRandom, incrementRandomNotRandom } = randomCounterSlice.actions;

export const selectCountRandom = (state) => state.randomCounter.value;

export default randomCounterSlice.reducer;
