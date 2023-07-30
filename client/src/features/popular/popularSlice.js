import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPopularItem, addPopularItem, deletePopularItem } from "./popularApi";

const initialState = {
    popularItems = [],
    status: "idle",
};

export const fetchPopularAsyncItems = createAsyncThunk (
    'popular/fetchPopularItems',
    async () => {
        const response = await fetchPopularItem();
        return response.data;
    }
);

export const addPopularAsyncItems = createAsyncThunk (
    'popular/addPopularAsyncItems',
    async (item)=>{
        const {id, title, description, brand, image, price} = item;
        const response = await addPopularItem({id,title,description,brand,image,price,liked:true});
        return response.data;
    }
);

export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase();
    }
});


export default popularSlice.reducer;