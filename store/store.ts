import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import notificationsReducer from "./slices/notificationsSlice";
import dashboardReducer from "./slices/dashboardSlice";
import userReducer from "./slices/userSlice";
import listReducer from "./slices/listingsSlice";
  
export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    notifications: notificationsReducer,
    dashboard: dashboardReducer,
    listings: listReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;