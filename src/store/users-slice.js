import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { FETC_USER_BY_ID } from "../utils/constants"
import { BASE_URL } from "../utils/constants"
const initialState ={
    loading: 'idle',
    user: null,

}

const userSlice = createSlice({name: 'userSlice', initialState,extraReducers:(builder) =>{
    builder.addCase(fetchUserById.fulfilled, (state,action) => {
        state.loading = 'done';
        state.user = action.payload;
    })
    builder.addCase(fetchUserById.rejected,(state,action)=>{
        state.loading = 'idle';
        state.user = null
    })
    builder.addCase(fetchUserById.pending,(state,action)=>{
        state.loading = 'pending';
    })
}})


const fetchUserById = createAsyncThunk(FETC_USER_BY_ID, 
    async (userid, thunkAPI) => {
    try {
       const res = await fetch(`${BASE_URL}/${userid}`)
       const data = await res.json()
       if(data.login){
       return thunkAPI.fulfillWithValue(data)
       }else{
       return thunkAPI.rejectWithValue(data)
       }
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue()
    }
})
const userSliceActions = userSlice.actions
export {userSlice, userSliceActions, fetchUserById}