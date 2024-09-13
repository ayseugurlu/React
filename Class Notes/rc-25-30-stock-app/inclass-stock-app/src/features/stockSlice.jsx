import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    firms: [],
    brands:[],
    products:[],
    sales:[],
    purchases:[],
    categories:[]
    
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    // firmsSuccess:(state,{payload}) => {
    //     state.loading = false;
    //     state.firms = payload.data
    // },
    // brandsSuccess:(state,{payload}) => {
    //     state.loading = false;
    //     state.brands = payload.data
    // },
    getStockSuccess:(state,{payload}) => {
        state.loading = false;
        state[payload.endpoint] = payload.stock
    },
    getProCatBrandSuccess: (state,{payload}) => {
      state.loading = false;
      state.products= payload[0];
      state.categories=payload[1];
      state.brands=payload[2];
    },
    getPurSalesSuccess: (state,{payload}) => {
      state.loading = false;
      state.sales= payload[1].data;
      state.purchases=payload[0].data;
     
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  firmsSuccess,
  brandsSuccess,
  getStockSuccess,
  getProCatBrandSuccess,
  getPurSalesSuccess
} = stockSlice.actions;
export default stockSlice.reducer;
