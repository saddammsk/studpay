import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import notificationsReducer from "./slices/notificationsSlice";
import dashboardReducer from "./slices/dashboardSlice";
import userReducer from "./slices/userSlice";
import listReducer from "./slices/listingsSlice";
import guaranteeReducer from './slices/guaranteeSlice';
import profileReducer from './slices/Profileslice';
  
export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    notifications: notificationsReducer,
    dashboard: dashboardReducer,
    guarantees: guaranteeReducer,
    listings: listReducer,
    users: userReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;