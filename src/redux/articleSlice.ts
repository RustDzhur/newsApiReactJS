import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  id: number
}

const initialState: CounterState = {
  id: 0,
}

export const counterSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {

  },
})

export default counterSlice.reducer