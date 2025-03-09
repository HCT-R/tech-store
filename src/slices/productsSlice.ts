import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "failed";
}

const initialState: ProductsState = {
  items: [],
  status: "idle",
};

// Асинхронный запрос товаров
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products"); // Пример API
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
