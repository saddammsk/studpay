import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetch",
  async () => {
    const res = await fetch("/api/partner/john-mike");
    const data = await res.json();
    return data.dashboard;
  }
);

interface DashboardState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDashboard.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load dashboard";
      });
  },
});

export default dashboardSlice.reducer;
