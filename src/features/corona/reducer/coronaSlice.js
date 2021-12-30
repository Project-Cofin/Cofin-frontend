import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { coronaAPI } from 'features/corona';
const TODAY = async () => {
   const res = await coronaAPI.today()
   return res.data
}
const WEEK = async () => {
    const res = await coronaAPI.week()
    return res.data
 }
const CONFIRMED = async () => {
    const res = await coronaAPI.confirmed()
    return res.data
 }
export const getToday = createAsyncThunk('/today', TODAY)
export const getWeek = createAsyncThunk('/week', WEEK)
export const getConfirmed = createAsyncThunk('/confirmed', CONFIRMED)
const coronaSlice = createSlice({
  name: 'chart',
  initialState: {
    todayState: {
      death: "",
      serious: "",
      new_hospitalization: "",
      confirmed: "",
      update_at: ""
    },
    weekState: {
      death: "",
      serious: "",
      new_hospitalization: "",
      confirmed: "",
      update_at: ""
    },
    confirmedState: [],
    type: '',
    keyword: '',
    params: {}
  },
  reducers: {},
  extraReducers: {
    [getToday.fulfilled]: ( state, action ) => {
      state.todayState = action.payload
    },
    [getWeek.fulfilled]: ( state, action ) => {
      state.weekState = action.payload
    },
    [getConfirmed.fulfilled]: ( state, action ) => {
      state.confirmedState = []
      action.payload.forEach(element => {
        state.confirmedState = [...state.confirmedState, {lineValue: element.confirmed*0.01, argument: element.date.split('T')[0].substr(5)}]
      });
    },
  }
})
export const currentTodayState = state => state.chart.todayState
export const currentWeekState = state => state.chart.weekState
export const currentConfirmedState = state => state.chart.confirmedState
export default coronaSlice.reducer;