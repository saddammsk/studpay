import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchListings = createAsyncThunk(
  "listings/fetch",
    async (_, thunkAPI) => {
      try {
        const res = await fetch("/mock-api/partner-api.json");
        if (!res.ok) throw new Error("Failed to fetch notifications");
  
        const data = await res.json();


        if (data.listings.items.length > 0) {
          return data.listings.items as Listing[];
        }
  
        return [];
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "An error occurred";
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
);

export interface Listing {
  id: number | string;
  status: string;
  [key: string]: string | number | boolean | null;
}

interface ListingsState {
  items: Listing[];
  filteredItems: Listing[];
  loading: boolean;
  error?: string;
}

const initialState: ListingsState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: undefined,
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    filterByStatus: (state, action: PayloadAction<string>) => {
      const status = action.payload.toLowerCase();
      if (status === "all") {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (item) => item.status.toLowerCase() === status
        );
      }
    },
    searchListings: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      state.filteredItems = state.items.filter((item) => {
        return (
          item.status.toLowerCase().includes(query) ||
          (typeof item.title === "string" && item.title.toLowerCase().includes(query)) ||
          (typeof item.location === "string" && item.location.toLowerCase().includes(query)) ||
          (item.price && item.price.toString().toLowerCase().includes(query))
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchListings.fulfilled, (state, action: PayloadAction<Listing[]>) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterByStatus, searchListings } = listingsSlice.actions;
export default listingsSlice.reducer;
