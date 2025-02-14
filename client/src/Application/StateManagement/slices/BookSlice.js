import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Correct API URL
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    const response = await axios.get("http://localhost:8000/material"); 
    return response.data || [];  // ✅ Ensure response is an array
});

const initialState = {
    books: [],  // ✅ Ensure books is always an array
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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.books = action.payload || []; // ✅ Ensure books is an array
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const { clearBooks } = bookSlice.actions;
export default bookSlice.reducer;
