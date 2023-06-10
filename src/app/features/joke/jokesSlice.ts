import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { JokeInterface } from './jokesInterfaces'

export interface JokesSlice {
  joke: JokeInterface
  loading: boolean
}

const initialState: JokesSlice = {
  joke: {
    id: '',
    joke: '',
    status: null
  },
  loading: false
}

export const counterSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    loadingJoke: (state) => {
      state.loading = true;
    },

    getJoke: (state, { payload }: PayloadAction<JokeInterface>) => {
      if(payload.status === 200){
        state.joke = payload;
      }else if(payload.status !== 200){
        state.joke = {
          id: "",
          joke: "",
          status: null
        }
      }
      
      state.loading = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getJoke, loadingJoke } = counterSlice.actions;

export default counterSlice.reducer