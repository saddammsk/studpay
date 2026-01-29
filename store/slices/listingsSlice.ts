import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchListings = createAsyncThunk(
  "listings/fetch",
  async () => {
    const res = await fetch("/api/partner/john-mike");
    const data = await res.json();
    return data.listings;
  }
);

interface Listing {
  status: string;
  [key: string]: string | number | boolean | null;
}

interface ListingsState {
  items: Listing[];
  total: number;
  loading: boolean;
}

const initialState: ListingsState = {
  items: [],
  total: 0,
  loading: false,
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    filterByStatus: (state, action) => {
      state.items = state.items.filter(
        (item) => item.status === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      });
  },
});

export const { filterByStatus } = listingsSlice.actions;
export default listingsSlice.reducer;
