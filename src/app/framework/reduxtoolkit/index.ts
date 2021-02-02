import {createSlice, configureStore} from '@reduxjs/toolkit';

const mobileDataSlice = createSlice({
  name: 'mobiledata',
  initialState: {
    dataList: <any>[],
  },
  reducers: {
    updateList: (state, payload) => {
      state.dataList = payload.payload;
    },
  },
});

export const {updateList} = mobileDataSlice.actions;

export const store = configureStore({
  reducer: mobileDataSlice.reducer,
});
