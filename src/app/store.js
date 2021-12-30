import {
  configureStore,
  combineReducers,  // redux의 reducer의 집합과 같다.
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { map } from 'features/map'
import { chatbot } from 'features/chatbot'
import { corona } from 'features/corona'

const rootReducer = combineReducers({map, chatbot, corona})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});