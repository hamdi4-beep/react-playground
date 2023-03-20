import { configureStore } from '@reduxjs/toolkit'
import indexReducer from './indexSlice'

export default configureStore({
  reducer: {
    index: indexReducer
  },
})