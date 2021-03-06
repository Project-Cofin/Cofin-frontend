import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mapAPI } from 'features/map';
const WORLD = async () => {
   const res = await mapAPI.world()
   return res.data
}
const MEDPOINT = async (x) => {
    const res = await mapAPI.medPoint(x)
    return res.data
 }
const MEDPOINTS = async (x) => {
    const res = await mapAPI.medPoints(x)
    return res.data
 }
const CASES = async (x) => {
    const res = await mapAPI.cases(x)
    return res.data
}
export const worldMap = createAsyncThunk('/organ/world', WORLD)
export const medPoint = createAsyncThunk('/organ/med-point', MEDPOINT)
export const medPoints = createAsyncThunk('/organ/med-points', MEDPOINTS)
export const casesPoints = createAsyncThunk('/organ/cases', CASES)
const mapSlice = createSlice({
  name: 'maps',
  initialState: {
    mapState: {
      name:''
    },
    mapsState: [],
    type: '',
    keyword: '',
    params: {}
  },
  reducers: {},
  extraReducers: {
    [worldMap.fulfilled]: ( state, action ) => {
      state.mapsState = action.payload
    },
    [medPoint.fulfilled]: ( state, action ) => {
      state.mapState = action.payload
    },
    [medPoints.fulfilled]: ( state, action ) => {
      state.mapsState = action.payload
    },
    [casesPoints.fulfilled]: ( state, action ) => {
      state.mapsState = action.payload
      state.mapState = {
        name:''
      }
    },
  }
})
export const currentMapState = state => state.maps.mapState
export const currentMapsState = state => state.maps.mapsState
export default mapSlice.reducer;