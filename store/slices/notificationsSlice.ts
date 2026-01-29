import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Notification {
  id: number;
  title: string;
  desc: string;
  read?: boolean;
}

export interface NotificationsState {
  list: Notification[];
  loading: boolean;
  error: string | null;
}

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/mock-api/partner-api.json");
      if (!res.ok) throw new Error("Failed to fetch notifications");

      const data = await res.json();

      if (data.users && data.users.length > 0) {
        return data.users[0].notifications as Notification[];
      }

      return [];
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);


const initialState: NotificationsState = {
  list: [],
  loading: false,
  error: null
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markAsRead: (state, action: PayloadAction<number>) => {
      const notif = state.list.find(n => n.id === action.payload);
      if (notif) notif.read = true;
    },
    markAllRead: (state) => {
      state.list.forEach(n => (n.read = true));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action: PayloadAction<Notification[]>) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { markAsRead, markAllRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
