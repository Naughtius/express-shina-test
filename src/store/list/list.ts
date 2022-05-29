import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
    isLoading: true,
    isError: false,
    coords: [],
    activeGeoId: null,
  },
  reducers: {
    getFetchList: (state) => {},
    getFetchListSuccess: (state, action) => {
      const { list, coords } = action.payload;

      return { ...state, list, isLoading: false, coords };
    },
    getFetchListError: (state) => {
      return { ...state, isError: true, isLoading: false };
    },
    changeGeoHandler: (state, action) => {
      const id = action.payload;

      return { ...state, activeGeoId: id };
    },
  },
});

export const {
  getFetchList,
  getFetchListSuccess,
  getFetchListError,
  changeGeoHandler,
} = listSlice.actions;

export default listSlice.reducer;
