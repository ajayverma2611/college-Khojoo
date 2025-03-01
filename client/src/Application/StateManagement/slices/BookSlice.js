import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    const response = await axios.get("https://khojo-college-server.vercel.app/material"); 
    return response.data || [];
});

const initialState = {
    books: [],
    status: "idle",
    error: null
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        clearBooks(state) {
            state.books = [];
            state.status = "idle";
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.books = action.payload || [];
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const { clearBooks } = bookSlice.actions;
export default bookSlice.reducer;
