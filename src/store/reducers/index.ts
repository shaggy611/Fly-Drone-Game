import { caveReducer } from './caveReducer'

import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  caveReducer,
})
export type RootState = ReturnType<typeof rootReducer>
