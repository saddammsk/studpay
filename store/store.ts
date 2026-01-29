import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import notificationsReducer from "./slices/notificationsSlice";
import dashboardReducer from "./slices/dashboardSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    notifications: notificationsReducer,
    dashboard: dashboardReducer,
    users: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;