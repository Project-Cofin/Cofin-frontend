import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { QnAAPI } from "features/QnA"

const WRITE = async (x) => {
    const res = await chatbotAPI.WRITE(x)
    return res.data
}

export const write = createAsyncThunk('/write', WRITE)

const QnASlice = createSlice({
    name: 'write',
    initialState: {
        writeState: {},
        type: '',
        keyword: '',
        params: {}
    },
    reducers: {},
    extraReducers: {
        [write.fulfilled]: ( state, action ) => {
            state.writeState = { ...state.wrietState, [action.payload['queryid']]:action.payload['write']}
        }        
    }
})

export const currentWriteState = state => state.write.writeState
export default QnASlice.reducer;