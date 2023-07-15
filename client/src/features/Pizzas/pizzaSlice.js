import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./pizzaAPI";

const initialState = {
    pizzas: [],
    status: 'idle',
};

export const fetchAsyncPizzas = createAsyncThunk(
    'products/fetchProduct',
    async () => {
        const response = await fetchPizzas();
        return response.data;
    }
);

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=> {
        builder
            .addCase(fetchAsyncPizzas.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(fetchAsyncPizzas.fulfilled, (state, action)=>{
                state.status = 'fulfilled';
                state.pizzas = action.payload;
            });
    },
});

export default pizzaSlice.reducer;