import { ProductSlice } from "@/types/product";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: ProductSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/products`);
    const products = await response.json();
    thunkApi.dispatch(setProducts(products));
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
