import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Notification {
  id: number;
  title: string;
  desc: string;
  read?: boolean;
}

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePicture?: string;
}

export interface BankDetails {
  bankAccountsConnected: number;
  nextPayout: { amount: number; date: string };
  thisMonth: number;
  connectedBanks: { bankName: string; accountNumber: string }[];
}

export interface SecuritySettings {
  password: string;
  twoFactorEnabled: boolean;
  loginAlertsEnabled: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
  role: string;
  currency: string;
  personalInformation?: PersonalInformation;
  bankDetails?: BankDetails;
  security?: SecuritySettings;
  notifications: Notification[];
  team?: TeamMember[];
  dashboard?: Record<string, unknown>;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/mock-api/partner-api.json");
      if (!res.ok) throw new Error("Failed to fetch users");

      const data = await res.json();
      return data.users as User[];
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);


const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    markNotificationRead: (state, action: PayloadAction<{ userId: string; notificationId: number }>) => {
      const user = state.users.find(u => u.id === action.payload.userId);
      const notification = user?.notifications.find(n => n.id === action.payload.notificationId);
      if (notification) notification.read = true;
    },
    markAllNotificationsRead: (state, action: PayloadAction<string>) => {
      const user = state.users.find(u => u.id === action.payload);
      user?.notifications.forEach(n => (n.read = true));
    },
    addTeamMember: (state, action: PayloadAction<{ userId: string; member: TeamMember }>) => {
      const user = state.users.find(u => u.id === action.payload.userId);
      if (user?.team) {
        user.team.push(action.payload.member);
      } else if (user) {
        user.team = [action.payload.member];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { markNotificationRead, markAllNotificationsRead, addTeamMember } = userSlice.actions;
export default userSlice.reducer;
