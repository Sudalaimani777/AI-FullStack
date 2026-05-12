import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: "idle"
}

export const loadPosts = createAsyncThunk("posts/loadPosts", async () => {
    try {
        const resp = await fetch("https://dummyjson.com/posts");
        const data = await resp.json();
        return data;
    } catch (err) {
        console.log(err);
    }
})

const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: builder => {
        builder.addCase(loadPosts.pending,  (state) => {
            state.status = "loading";
        })
        builder.addCase(loadPosts.fulfilled, (state, action) => {
            state.status = "success";
            state.posts = action.payload;
        })
        builder.addCase(loadPosts.rejected, (state) => {
            state.status = "failed";
        })
    }
        
})

export default postSlice.reducer;

//This is the old version of the extraReducers, we can also write it in the builder callback notation as shown below:

// extraReducers: (builder) => {
// {
//         [loadPosts.pending]: (status) => {
//             status.status = "loading";
//         },
//         [loadPosts.fulfilled]: (state, action) => {
//             state.status = "success";
//             state.posts = action.payload;
//         },
//         [loadPosts.rejected]: (status) => {
//             status.status = "failed";
//         }
//     }